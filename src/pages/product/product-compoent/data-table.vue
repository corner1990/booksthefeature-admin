<template>
  <div class="data-table">
    <el-table
        :data="tableData"
        max-height="550"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
        
    >
    <!-- @selection-change="handleSelectionChange" -->
        <!-- <el-table-column type="selection" width="55" align="center"></el-table-column> -->
        <!-- <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column> -->
        <el-table-column prop="name" label="任务名称" width="240" >
          <template slot-scope="scope">
              <div class="flex" @click="showDetail(scope.row)">
                <el-image
                  class="product-img"
                  :src="scope.row.task_cover || ''"
                ></el-image>
                <el-button
                  type="text"
                  class="product-name"
                >
                  {{ scope.row.task_name || '' }}
                </el-button>
              <!-- <p class="product-name"> </p> -->
              </div>
            </template>
        </el-table-column>
        <el-table-column label="任务描述">
            <template slot-scope="scope">
              <p class="task-desc">{{scope.row.task_desc}}</p>
            </template>
        </el-table-column>
        <el-table-column label="价格">
            <template slot-scope="scope">￥{{scope.row.display_max_amount}}</template>
        </el-table-column>
        <!-- <el-table-column label="商品地址 ceshi ">
          <template slot-scope="scope">
            <el-tag @click="copyUrl(scope.row)">复制站内链接</el-tag>
          </template>
        </el-table-column> -->
        <el-table-column label="任务信息" align="center">
            <template slot-scope="scope">
              <div class="info">
                <p>最大押金：{{ scope.row.display_max_amount }}</p>
                <p>最小押金：{{ scope.row.display_min_amount }}</p>
                <p>奖金比例：{{ scope.row.display_reward_rate }}</p>
              </div>
            </template>
        </el-table-column>

        <el-table-column prop="created_timestamp" label="创建时间">
          <template slot-scope="scope">
                <p
                >{{scope.row.updated_timestamp | dateFormat}}</p>
            </template>
        </el-table-column>
        <el-table-column label="状态" align="center">
            <template slot-scope="scope">
              <p>
                <el-tag type="success" v-show="scope.row.task_status == 1">正常</el-tag>
                <el-tag type="warning" v-show="scope.row.task_status != 1">冻结</el-tag>
              </p>
            </template>
        </el-table-column>
        <el-table-column label="操作" width="240" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              v-show="scope.row.task_status != '1'"
              @click="operation(scope.$index, scope.row, 1)"
            >解冻</el-button>
            <el-button
              type="text"
              v-show="scope.row.task_status == '1'"
              @click="operation(scope.$index, scope.row, -1)"
            >冻结</el-button>
            <el-button
              type="text"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { dateFormat, formatPrice } from '@/utils/utils'
import { deleteTask, operateTask } from '../api'
import { mapMutations } from 'vuex'
export default {
  name: 'data-table',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    type: {
      type: [String, Array],
      default: '0'
    }
  },
  data() {
    return {
        query: {
          address: '',
          name: '',
          pageIndex: 1,
          pageSize: 10
        },
        multipleSelection: [],
        delList: [],
        editVisible: false,
        pageTotal: 0,
        form: {},
        tableData: [],
        idx: -1,
        id: -1,
        src: 'https://img20.360buyimg.com/mobilecms/s700x700_jfs/t1/66856/21/4885/89400/5d305dcdE3a32bbb4/7999de5bed64297f.jpg!q70.jpg'
    };
  },
  created() {},
  watch: {
    list(list) {
      this.tableData = list
    }
  },
  methods: {
    ...mapMutations('product', {
      setStore: 'update'
    }),
    showDetail(info) {
      this.setStore({key: 'info', val: info})
      this.$emit('update', 'showDetail', true)
    },
    // 触发搜索按钮
    handleSearch() {
        this.$set(this.query, 'pageIndex', 1);
        this.getData();
    },
    // 删除操作
    handleDelete(index, row) {
        // 二次确认删除
        this.$confirm('确定要删除吗？', '提示', {
            type: 'warning'
        })
          .then(() => {
            let { id } = row

            return deleteTask({task_id: id})
          })
          .then((res) => {
            let { errorCode, errorMessage } = res
            if (errorCode === 0) {
              this.$message.success('删除成功');
              this.tableData.splice(index, 1);
              return false
            }
            this.$message.error(errorMessage)
          })
          .catch(() => {});
    },
    // 多选操作
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    delAllSelection() {
        const length = this.multipleSelection.length;
        let str = '';
        this.delList = this.delList.concat(this.multipleSelection);
        for (let i = 0; i < length; i++) {
            str += this.multipleSelection[i].name + ' ';
        }
        this.$message.error(`删除了${str}`);
        this.multipleSelection = [];
    },
    // 编辑操作
    handleEdit(index, row) {
      window.sessionStorage.setItem('refersh', '1')
      this.$router.push({ path: '/edit-task', query: { task_id: row.id } })
    },
    /**
     * @des 上下架
     */
    async operation(index, row, task_status) {
      // let item_array = [row.base_info.item_id]
      
      let { type } = this
      type -= 0
      // 操作类型 ：1.上架0.下架
      let msg = '冻结成功'
      if (task_status === 1) {
        msg = "解冻成功"
      }
      let { errorCode } = await operateTask({ task_id: row.id, task_status })
      if (errorCode === 0) {
        this.$message.success(msg)
        this.tableData = this.tableData.map(item => {
          if (item.id !== row.id) return item
          return {
            ...row,
            task_status
          }
        }).filter(item => {
          if (type === 0) return true
          return type === item.task_status
        })
      }
    },
    /**
    * @desc 复制粘贴
    */
    copyUrl(info) {
      let path = `/pages/productDetail/index?id=${info.base_info.item_id}`
      let transfer = document.createElement('input');
      transfer.classList.add('copy-input')
      document.body.appendChild(transfer);
      transfer.value = path;  // 这里表示想要复制的内容
      transfer.focus();
      transfer.select();
      if (document.execCommand('copy')) {
          document.execCommand('copy');
      }
      transfer.blur();
      this.$message({
          message: '复制成功',
          type: 'success'
        });
      document.body.removeChild(transfer);
    }
  },
  filters: {
    /**
     * @desc 格式化时间
     */
    dateFormat(value) {
      let data  = new Date((value - 0) * 1000)
      return dateFormat(data)
    },
    /**
     * @desc 处理价格
     */
    formatPrice(item) {
      let { low_price, high_price } = item
      low_price = formatPrice(low_price-0)
      let res = low_price

      if (high_price ) {
        high_price = formatPrice(high_price)
        res = `${res} ~ ${high_price}`
      }
      return res

    }
  },
  mounted() {
    this.tableData = this.list
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../less/main.less');
.data-table{
  .product-name{
    margin-left: 10px;
  }
  .product-img{
    width: 100px;
    min-width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .task-desc{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: pointer;
    color: @color-brand;
  }
}
</style>
<style>
.copy-input{
  position: absolute;
  opacity: 0;
  z-index: -1;
}
</style>
