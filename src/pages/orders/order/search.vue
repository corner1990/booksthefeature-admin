<template>
  <div class="orders-search">
    <el-form :inline="true" :model="info" class="demo-form-inline">
      <el-form-item label="订单号">
        <el-input v-model="info.task_order_sn" placeholder="订单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button @click="resetSearch">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'product-search',
  props: {
    msg: String
  },
  data() {
    return {
      info: {
        task_order_sn: '',
        
      },
      resetInfo: {
        task_order_sn: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search', this.info, 'search')
    },
    resetSearch() {
      this.info.task_order_sn = ''
      this.$emit('search', this.info, 'reset')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.orders-search{
  &{
    background: #fff;
    padding: 10px 15px;
  }
  .price-wrap{
    display: flex;
  }
  .el-form-item{
    margin-bottom: 10px;
  }
}

.search_condition{
  margin-left: 72px;
}
</style>
