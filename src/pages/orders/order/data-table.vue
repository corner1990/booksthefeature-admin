<template>
  <div class="data-table">
    
    <el-table
      :data="list"
      class="table"
      :stripe="true"
      style="width: 100%">
      <el-table-column
        label="任务名称"
        width="170">
        <template slot-scope="scope">
          <div class="product-wrap">
            <div
              class="product"
            >
             <img
              class="img"
              :src="scope.row.task_cover" alt="" 
              srcset=""
             >
              <p>
                <el-button type="text" @click="checkTaskOver(scope.row)">{{scope.row.task_name}}</el-button>
              </p>
            </div>
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="name"
        label="订单类型"
        width="80">
        <template slot-scope="scope">
       
        </template>
      </el-table-column> -->
      
      <el-table-column
        label="任务备注"
        >
        <template slot-scope="scope">
          <div class="bless">
            {{ scope.row.remark ? scope.row.remark : '暂无留言信息'}}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="任务信息">
        <template slot-scope="scope">
          <div class="delivery">
            任务状态：
            <el-tag
              :type="statusObj[scope.row.task_order_status].type"
            >
              {{statusObj[scope.row.task_order_status].label}}

            </el-tag>
            <!-- <el-tag
              type="success"
              v-else-if="scope.row.order_base_info.order_status >= 40 && scope.row.order_base_info.order_status !== 60"
            >已发货</el-tag>
            
            <el-tag type="warning" v-else>未发货</el-tag> -->
            <p class="info">
              任务时间：{{ scope.row.start_date.replace(/([\d]{4})([\d]{2})([\d]{2})/, '$1-$2-$3')}} 至 
              {{ scope.row.end_date.replace(/([\d]{4})([\d]{2})([\d]{2})/, '$1-$2-$3') }}
            </p>
            <p class="info">匿名配送： {{ scope.row.anonymous_status ? '是' : '否'}}</p>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="detail"
        label="订单信息">
        <template slot-scope="scope">
          <div class="delivery">
            <p class="info">订 单 号：{{ scope.row.task_order_sn}}</p>
            <p class="info">支付押金：{{ scope.row.display_bet_amount}}</p>
            <p class="info">奖金金额：{{ scope.row.display_reward_rate}}</p>

          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column
        align="center"
        prop="address"
        label="配送状态">
        <template slot-scope="scope">
          <div class="reciver">
           
          </div>
        </template>
      </el-table-column> -->
      <!-- <el-table-column
        align="center"
        label="是否匿名">
        <template slot-scope="scope">
          <div class="anonymous">
            <p class="info">{{ scope.row.anonymous_status ? '是' : '否'}}</p>
          </div>
        </template>
      </el-table-column> -->
      <el-table-column
        align="center"
        width="200px"
        label="操作">
        <template slot-scope="scope">
         <el-button
          type="text"
          @click="newTaskReviewFn(scope.row)"
          v-show="scope.row.task_order_status == 1"
         >新增任务审核</el-button>
         <el-button
          type="text"
          @click="checkTaskOver(scope.row)"
         >任务完成审核</el-button>
         <el-button type="text" disabled>发放奖金</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新增任务审核"
      :visible.sync="showReviewInfo"
      width="420px">
      <NewTaskReview :info="reviewInfo" @update="update" />
    </el-dialog>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/utils'
import { deliverOrder } from '../../orders/api';
import NewTaskReview from './new-task-review'

export default {
  name: 'data-table',
  props: {
      list: {
        type: Array,
        default() {
            return []
        }
      }
  },
  components: {
    NewTaskReview
  },
  data() {
    return {
        query: {
          address: '',
          name: '',
          pageIndex: 1,
          pageSize: 10
        },
        tableData: [],
        multipleSelection: [],
        delList: [],
        editVisible: false,
        pageTotal: 0,
        form: {},
        idx: -1,
        id: -1,
        statusObj: {
          '1': {
            label: '待审核付款',
            type: 'danger'
          },
          '20': {
            label: '进行中',
            type: 'success'
          },
          '30': {
            label: '待发货',
            type: 'warning'
          },
          '40': {
            label: '待收货',
            type: 'warning'
          },
          '50': {
            label: '已完成',
            type: 'success'
          },
          '60': {
            label: '已取消',
            type: 'info'
          },
          '70': {
            label: '已完成',
            type: 'success'
          },
          '80': {
            label: '已完成',
            type: 'success'
          },
          '100': {
            label: '已结束',
            type: 'default'
          }
        },
        reviewInfo: {},
        showReviewInfo: false
    };
    },
    created() {
    },
    methods: {
      update(key, val) {
        this[key] = val
      },
      // 删除操作
      handleDelete(index) {
        // 二次确认删除
        this.$confirm('确定要删除吗？', '提示', {
            type: 'warning'
        })
            .then(() => {
                this.$message.success('删除成功');
                this.tableData.splice(index, 1);
            })
            .catch(() => {});
      },
      async dirver(info) {
        
        let { errorCode } = await deliverOrder(info)
        if (errorCode === 0) {
          this.$message({
          message: '发获成功',
          type: 'success'
        });
          this.$emit('dirver', {...info, delivery_timestamp: new Date().getTime()})
        }
      },
      /**
       * @desc 新建任务审核
       */
      newTaskReviewFn(info) {
        this.reviewInfo =  info
        this.showReviewInfo =  true
      },
      /**
       * @desc 任务结束审核
       */
      checkTaskOver(info) {
        let path = '/orders/task-over'
        localStorage.setItem('$taskOverInfo', JSON.stringify(info))
        this.$router.push({ path })
      }
  },
  filters: {
    formTime(t) {
      if(!t) {
        return '暂无'
      }
      t = new Date(t * 1000)
      return dateFormat(t, 'YYYY-mm-dd HH:MM')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.data-table{
  max-height: calc(100vh - 260px);
  overflow: auto;
  .el-table {
    th{
      background-color: #00b4fc !important;
    }
  }
  .delivery{
    .info{
      line-height: 28px;
    }
  }
}
.product-wrap{
  display: flex;
  flex-wrap: wrap;
  .product{
    text-align: center;
    margin-right: 10px;
  }
  .img{
    max-width: 150px;
    max-height: 150px;
  }
}

.no-data{
  padding: 200px;
  color: #00b4fc;
  text-align: center;
}
</style>
<style lang="less">
.el-table__expanded-cell[class*=cell]{
  padding: 10px
}
.data-table{
  .el-table {
    th{
      background-color: #00b4fc !important;
      color: #fff;
    }
  } 
}
</style>
