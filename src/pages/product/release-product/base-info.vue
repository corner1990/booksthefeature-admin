<template>
  <div class="base-info">
    <h3 class="item-title">任务信息</h3>
    <el-form
      :label-position="labelPosition"
      label-width="120px"
      ref="baseForm"
      class="base-form"
      :model="info"
      :rules="rules"
    >
      <el-form-item label="任务名称" prop="task_name">
        <el-input
          class="medium"
          v-model="info.task_name"
          placeholder="请输入任务名称"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="任务描述" prop="task_desc">
        <el-input type="textarea" class="medium" v-model="info.task_desc" placeholder="请输入任务描述">
        </el-input>
      </el-form-item>
      <el-form-item label="任务主图" prop="main_image">
        <el-upload
          action="#"
          :file-list="info.main_image"
          :limit="1"
          :on-change="mainHandleChange"
          :auto-upload="false"
          list-type="picture-card"
          :http-request="uploadImg">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file, 'main_image')"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
        </el-upload>
      </el-form-item>
     
      <el-form-item label="任务时间" prop="day_num">
        <el-input class="medium" v-model="info.day_num" placeholder="请输入任务时间，按照天计算">
        </el-input>
      </el-form-item>
      <el-form-item label="任务最大押金" prop="max_amount">
        <el-input class="medium" v-model="info.max_amount" placeholder="请输入正整数">
          <template slot="prepend">&yen;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="任务最小押金" prop="min_amount">
        <el-input class="medium" v-model="info.min_amount" placeholder="请输入正整数">
          <template slot="prepend">&yen;</template>
        </el-input>
      </el-form-item>
      <el-form-item label="任务回报率" prop="reward_rate">
        <el-input class="medium" v-model="info.reward_rate"></el-input>
        <el-select
          v-model="info.task_type"
          placeholder="请选择奖金计算规则"
          style="margin-left: 10px;"
        >
          <el-option
            v-for="item in rewardList"
            :key="item.val"
            :label="item.name"
            :value="item.val">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="任务排序" prop="seq">
        <el-input class="medium" v-model="info.seq"></el-input>
      </el-form-item>

    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import {
  uploadBase64Image,
} from '../api'

export default {
  name: 'base-info',
  props: {
    editInfo: Object
  },
  data() {
    return {
      labelPosition: 'right',
      info: {
        task_name: '',
        task_desc: '',
        main_image: [],
        day_num: '',
        max_amount: '',
        reward_rate: 50,
        min_amount: '',
        seq: 0,
        task_type: 1
      },
      main_image: [],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      rewardList: [
        {
          name: '百分比',
          val: '1'
        },
        {
          name: '固定金额',
          val: '2'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleRemove(file, key) {
      let arr = this.info[key]
      this.info[key] = arr.filter(item => item.uid !== file.uid)
    },
    /**
     * @desc 保存商品图片
     */
    handleChange(file, fileList) {
      this.info.gallery_image = fileList;
    },
    /**
     * @desc 保存商品图片
     */
    mainHandleChange(file) {
   
      this.info.main_image = [file]
      this.cutImg(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeUpload() {
      return false 
    },
    /**
     * @desc 获取签名
     */
    
    /**
     * 上传图片
     * @param data
     */
    async uploadImg(file) {
      // 处理文件名
      // let imgName = md5(`${file.uid}-${file.name}`)
      // let imgKey = `ipxmall/${imgName}`
      let uploadFile = file.image
      try {
        let { errorCode, data } = await uploadBase64Image({file_base_64: uploadFile})
        if (errorCode === 0) {
          file.requestUrls = data
        } else {
          this.info.main_image = []
          this.$message.error('图片上传失败，请重新上传');
        }

      } catch(err) {
        console.log('err')
        this.info.main_image = []
        this.$message.error('图片上传失败，请重新上传');
      }
     
    },
    /**
     * @desc 剪贴图片
     */
    cutImg(file) {
      let el = document.createElement('img')
      el.style.position = 'absolute'
      el.style.left = '-300000px'

      el.src= file.url
      // let maxWidth = 1920
      // let maxWidth = 500
      el.addEventListener('load', () => {
        let { width, height } = el
        
        // if (width > maxWidth) {
        //   height = Math.round((maxWidth / width * height))
        //   width = maxWidth
        // }
        this.drawImg(el, width, height, file)
      })
    },
    /**
     * @desc canvas 渲染图片
     */
    drawImg(img, width, height, file) {
      let canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0,width, height)
      // canvas.toBlob( blob => {
      //   file.image = blob

      //   this.uploadImg(file)
      // }, 'image/jpeg', '0.8')

      file.image = canvas.toDataURL('image/jpeg', 0.71)
      // 上传图片
      this.uploadImg(file)
    },
    /**
     * @desc 编辑时初始化数据
     */
    initInfo() {
      let infoStr = window.sessionStorage.getItem('$editInfo')
      if (!infoStr) {
        return false
      }
      let obj = JSON.parse(infoStr)
      let info = {
        main_image: []
      }
      let keys = ['task_name', 'task_desc', 'task_status', 'day_num', 'reward_rate', 'seq', 'task_type']
      keys.map(key => {
        info[key] = obj[key]
      })
      info.main_image = [{url: obj.task_cover, file: 'task_cover'}]
      info.task_id = obj.id
      info.max_amount = parseInt(obj.display_max_amount)
      info.min_amount = parseInt(obj.display_min_amount)
      this.info = info
    },

    checkForm() {
      console.log('this', this)
      // this.$refs.baseForm.validate(valid => {
      //   if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      // })
    }
  },
  watch: {
    info: {
      deep: true,
      handler(info) {
        this.$emit('update', 'baseInfo', info)
      }
    },
    editInfo: {
      deep: true,
      handler() {
        this.initInfo()
      }
    }
  },
  computed: {
    /**
     * @desc 是否是编辑状态
     */
    isEdit() {
      return /edit-product/.test(this.$route.path)
    },
    rules() {
      
      return {
       
        task_name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
        task_desc: [
          { required: true, message: '请输入任务描述', trigger: 'blur' }
        ],
        task_type: [
          { required: true, message: '请选择鲜花类型', trigger: 'blur' }
        ],
        main_image: [
          { required: true, message: '请上传任务图片', trigger: 'blur' }
        ],
        // description: [
        //   { required: true, message: '请输入商品描述', trigger: 'blur' }
        // ],
        day_num: [
          { required: true, message: '请输入任务时间周期', trigger: 'blur' }
        ],
        shipping_price: [
          { required: true, message: '请输入商品运费', trigger: 'blur' }
        ],
        max_amount: [
          { required: true, message: '请输入押金最大金额', trigger: 'blur' }
        ],
        min_amount: [
          { required: true, message: '请输入押金最小金额', trigger: 'blur' }
        ],
        seq: [
          { required: true, message: '请输入库存', trigger: 'blur' }
        ],
        reward_rate: [
          { required: true, message: '请输入奖金回报率', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    // 获取oss签名
    // this.getSign()
    if (this.isEdit) {
      this.initInfo()
    }
    
  },
  mounted() {
    this.$emit('update', 'baseForm', this.$refs.baseForm)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../less/main.less');
.base-info{
  &{
    background: #fff;
    padding: 0 15px 15px;
  }
  .item-title{
    &{
      line-height: 32px;
      background: #eee;
      font-size: 16px;
    }
    &::before{
      content: "";
      display: inline-block;
      height: 16px;
      width: 4px;
      background: @color-brand;
      vertical-align: middle;
      margin-top: -4px;
      margin: 10px;
    }
  }
  .base-form{
    margin-top: 16px;
    width: 600px;
    .medium{
      width: 216px;
    }
  }
  #img{
    position: absolute;
    left: -300000px;
  }
}
</style>
