<template>
  <div class="product">
    <h2 class="title">任务模版</h2>
    <!-- <Search @search="search" /> -->
    <div class="btn-wrap">
      <router-link to="/release-task" class="release-btn">
        <el-button type="primary" >发布任务</el-button>
      </router-link>
    </div>
    <div class="table-wrap">
      <dataTable :list="list" :type="publish_type" @update="update" />
    </div>
    <!-- <el-tabs
      v-model="publish_type"
      type="card"
      @tab-click="handleClick"
      class="product-tab"
    >
      <el-tab-pane
        :label="tab.label"
        :name="tab.key"
        v-for="(tab, key) in tabList"
        :key="key"
      >
        
        <dataTable :list="list" :type="publish_type" @update="update" />
      </el-tab-pane>
    </el-tabs> -->
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
    <el-dialog
      :visible.sync="showDetail"
      width="420px"
    >
      <MobileProductDetail :info="{}" />
    </el-dialog>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
// import Search from './product-compoent/search'
import dataTable from './product-compoent/data-table'
import MobileProductDetail from '../../components/product-detail'
import { getTask } from './api'
export default {
  name: 'product',
  props: {
    msg: String
  },
  components: {
    // Search,
    dataTable,
    MobileProductDetail
  },
  data() {
    return {
      publish_type: '0',
      tabList: [
        {
          label: '全部',
          key: '0',
        },
        {
          label: '上架中',
          key: '1',
        },
        {
          label: '已下架',
          key: '2'
        }
      ],
       filterInfo: {
      },
      list: [],
      pageInfo: {
        count: 0,
        page_size: 10,
        index: 0
      },
      showDetail: false,
      loading: false
    }
  },
  methods: {
    handleClick() {
      this.loadInfo()
    },
    /**
     * @desc  更新数据
     */
    update(key, value) {
      this[key] = value
    },
    handlePageChange(index) {
      this.pageInfo.index = index -1
      this.$nextTick(() => {
        this.loadInfo()
      })
      
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
     this.$nextTick(() => {
        this.loadInfo()
      })
    },
    /**
     * @desc 加载数据
     */
    async loadInfo() {
      
      if (this.loading) return this.$message.success('数据加载中，请稍等');
      this.list = []
      this.loading = true
      let { publish_type, pageInfo, filterInfo } = this
      let { errorCode, data } = await getTask({
        ...pageInfo,
        ...filterInfo,
        publish_type
      })
      if (errorCode === 0) {
        this.list = data.list
        this.pageInfo = data.page_info
      }
      this.loading = false
    },
  },
  created() {
    this.loadInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.product{
  position: relative;
  // background: #fff;
  .title{
    background: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #eee
  }
  .product-tab{
    background: #fff;
    margin-top: 16px;
    padding: 15px;
    
  }
  .btn-wrap{
    margin-top: 16px;
    background: #fff;
  }
  .release-btn{
    padding: 12px;
    // position: absolute;
    // left: 270px;
    // top: 125px;
    // z-index: 2;
    .el-button{
      padding: 10px 20px;
      margin: 12px 0;
    }
  }
  .table-wrap{
    background-color: #fff;
    padding: 0 12px;
  }
  .pagination{
    background: #fff;
    margin: 0;
    padding: 20px 10px;
  }
}
</style>
