<template>
  <div class="orders">
    <h2 class="title">任务管理</h2>
    <!-- <div
      class="date-piker-wrap"
      v-show="activeName == '60'"
    >
      <el-date-picker
        v-model="day"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </div> -->
    <Search @search="search" />
    <section class="content">
      <el-tabs v-model="activeName" type="card" @tab-click="changeStatus">
        <template>
          <el-tab-pane
            :label="tab.label"
            :name="tab.key"
            v-for="(tab, key) in tabs"
            :key="key"
            
          >
           <DataTable v-loading="loading" :list="list" />
          </el-tab-pane>
        </template>
      </el-tabs>
      <div class="pagination">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :current-page="pageInfo.index"
            :page-size="pageInfo.page_size"
            :total="pageInfo.count"
            @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
import Search from './order/search'
import DataTable from './order/data-table'
import Bus from '../../utils/bus'
import { getOrderList } from './api'
export default {
  name: 'orders',
  data() {
    return {
      tabs: [
        {
          label: '全部',
          key: '0'
        },
        {
          label: '待支付',
          key: '1'
        },
        {
          label: '审核中',
          key: '2'
        },
        {
          label: '进行中',
          key: '3'
        },
        {
          label: '已结束',
          key: '100'
        }
      ],
      filterInfo: {},
      activeName: '0',
      allData: {}, // 保存所有数据
      list: [],
      order_status: '',
      pageInfo: {
        count: 40,
        page_size: 10,
        index: 0
      },
      expressList: [],
      loading: false,
    }
  },
  components: {
    Search,
    DataTable
  },
  methods: {
    /**
     * @desc 加载数据
     */
    async loadInfo(index = 0) {
      let { order_status } = this
      !order_status ? order_status = 0 : null
      this.loading = true
      let { errorCode, data } = await getOrderList({
        ...this.pageInfo,
        ...this.filterInfo,
        task_order_query_type: order_status,
        index
      })
      this.loading = false
      if (errorCode === 0) {
        this.list = data.list
        this.pageInfo = data.page_info
      }
    },
    /**
     * @des 搜索
     */
    search(filterInfo) {
      this.pageInfo = {
        index: 0,
        page_size: 10
      }
      this.filterInfo = filterInfo
      this.loadInfo()
    },
    handlePageChange(index) {
      this.loadInfo(index-1)
    },
    changeStatus(tab) {
      this.list = []
      let { name } = tab
      name = name === 'all' ? null : name - 0
      this.order_status = name
      sessionStorage.setItem('$orderTab', name)
      this.loadInfo(0)
    },
    /**
     * @desc 审核项目
     */
    checkTask(task_order_status, info) {
      
      this.list = this.list.map(item => {
        if (item.task_order_sn != info.task_order_sn) return item
        return {
          ...item,
          task_order_status
        }
      })
    }
  },
  filters: {
    filterList(value, item) {
      let { key } = item
      if (key === 'all') return value
      return value.filter(() => `${value.order_status}` === key)      
    }
  },
  mounted() {
    let name = sessionStorage.getItem('$orderTab')
    this.activeName = name ? name : '0'
    name = name === 'all' ? null : name - 0
    this.order_status = name
    
    this.$nextTick(() => {
      this.loadInfo()
      Bus.$on('checkTask', this.checkTask)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.orders{
  position: relative;
  .title{
    background: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #eee
  }
  .content{
    &{
      margin-top: 16px;
      background: #fff;
      overflow: inherit;
    }
  }
  .date-piker-wrap{
    position: absolute;
    top: 79px;
    right: 12px;
    z-index: 2;
  }
}
</style>
