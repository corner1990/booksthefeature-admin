<template>
  <div class="repease-product">
    <h2 class="title">{{ title }}</h2>
    <BaseInfo @update="update" :editInfo="editInfo" />
    <!-- <PriceWarehouse @update="update" :editInfo="editInfo" /> -->
    <div class="btn-wrap">
      <el-button type="" @click="cancel">取消编辑</el-button>
      <el-button type="primary" @click="vertify">保存并预览</el-button>
    </div>
  </div>
</template>

<script>
import BaseInfo from './release-product/base-info'
// import PriceWarehouse from './release-product/price-warehose'
import { createTask, getTaskDetail, updateTask  } from './api'

export default {
  name: 'repease-product',
  props: {},
  components: {
    BaseInfo,
  },
  data() {
    return {
      labelPosition: 'right',
      baseInfo: {
        main_image: []
      },
      baseForm: null,
      editInfo: null,
      info: {},
      loading: false
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    },
    /**
     * @desc 是否是编辑状态
     */
    isEdit() {
      return /edit-task/.test(this.$route.path)
    },
    rules() {
      return {
        
      }
    }
  },
  watch: {
    $route(){
      this.loadInfo()
    }
  },
  mounted() {
    window.sessionStorage.removeItem('$eitdInfo')
    
    if (this.isEdit) {
      this.loadInfo()
    }
    
  },
  methods: {
    update(key, val) {
      this[key] = val
    },
    vertify() {
      // this.vertifySpecialForm()
      // return false
      this.baseForm.validate(valid => {
        if (valid) {
          this.submit()
          // this.vertifySpecialForm()
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    cancel() {
      this.$router.go(-1)
    },
    /**
     * @desc 验证信息
     */
    vertifySpecialForm() {
      
      this.baseForm.validate(valid => {
        if (valid) {
          this.submit()
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },
    /**
     * @desc 提交
     */
    submit() {
      let { baseInfo } = this
      let { main_image } = baseInfo
      let params = {
        ...baseInfo,
        task_cover: this.getImgSrc(main_image)[0].content
      }
      delete params.main_image
      
      // 检测图片是否上传完毕
      let arr = []
      let isUpladed = arr.every(item => { return item && !item.includes('blob:') })
      if (!isUpladed) {
        this.$message.error('图片上传中，请稍后再试');
        return false
      }
      
      if (this.isEdit) { // 调用编辑接口
        this.updateProductInfo(params)
        return false
      }
      this.createProductInfo(params)
      
    },
    /**
     * @desc 编辑
     */
    async updateProductInfo(params) {
      // let infoStr = window.sessionStorage.getItem('$editInfo')
      // if (params.base_info.item_id !== '-00000') { return false }
      if (this.loading) return false
      this.loading = true
      let { errorCode } = await updateTask(params)
      this.loading = false
      if (errorCode === 0) {
        this.$router.go(-1)
      }
    },
    /**
     * @desc 创建
     */
    async createProductInfo(params) {
      if (this.loading) return false
      this.loading = true
      let { errorCode } = await createTask(params)
      this.loading = false
      if (errorCode === 0) {
        this.$router.go(-1)
      }
    },
    /**
     * @desc 获取图片列表
     */
    getImgSrc(fileList = []) {
      if(!fileList.length) return ''
      return fileList.map((item, id) => {
        let img = {
          id,
          type: 'image',
        }
        if (item.requestUrls) {
          img.content = item.requestUrls
        } else {
          img.content = item.url
        }
        
        return img
      })
    },
    /**
     * @desc 获取信息
     */
    async loadInfo() {
      
      let { errorCode, data } = await getTaskDetail(this.$route.query)
      if (errorCode === 0) {
        this.editInfo = data
        window.sessionStorage.setItem('$editInfo', JSON.stringify(data))
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../less/main.less');
.repease-product{
  &{
    height: calc(100vh - 100px);
    overflow: auto;
  }
  .title{
    background: @white;
    padding: 15px;
  }
  .specil-form{
    background-color: @white;
    padding: 10px 0;
  }
  .btn-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: @white;
  }
}
</style>
