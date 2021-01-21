<template>
  <div class="new-task-review">
    <h3 class="title">{{info.task_name}}</h3>
    <p class="task-desc">{{ info.task_desc }}</p>
    <p class="task-desc">用户备注： {{ info.user_remark ? info.user_remark : '无' }}</p>
    <p class="line-num">订单号码：{{ info.task_order_sn }}</p>
    <p class="line-num">支付押金：{{ info.display_bet_amount }}</p>
    <p class="line-num">奖金比例：{{ info.display_reward_rate }}</p>
    <p class="update-tiem">{{ info.updated_timestamp }}</p>
    <div class="review-mark">
      <h4 class="title">审核备注</h4>
      <el-input v-model="check_remark" type="textarea" />
    </div>
    <div class="btn-wrap">
      <el-button type="danger" plain @click.stop="refuse">拒绝</el-button>
      <el-button type="primary" plain @click.stop="pass">通过</el-button>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import Bus from '../../../utils/bus'
import { checkTaskOrder } from '../api'
export default {
  name: 'new-task-review',
  components: {},
  props: {
    info: {
      type: Object,
      default() {
        return {
          bet_amount: 0,
          display_bet_amount: "0",
          display_reward_rate: "0",
          end_date: "",
          is_sign_today: 0,
          reward_rate: 0,
          sign_record_check: null,
          sign_record_list: [],
          start_date: "",
          task_desc: "!",
          task_id: 1,
          task_name: "",
          task_order_sn: "",
          task_order_status: 1,
          user_remark: ""
        }
      }
    }
  },
  data() {
    return {
      check_remark: ''
    }
  },
  methods: {
    async checkTask(check_result, msg) {
      let { task_order_sn } = this.info
      let { check_remark } = this
      let params = { check_result, task_order_sn, check_remark }
      let status = check_result >= 0 ? 20 : 100
      let { errorCode } = await checkTaskOrder(params)
      if (errorCode == 0) {
        this.$message(msg)
        Bus.$emit('checkTask', status, this.info)
        this.cancel()
      }
    },
    /**
     * @desc 通过
     */
    pass() {
      
      this.$confirm('确定通过当前任务么？', '确认提醒', {
        type: 'warning'
        })
      .then(() => {
        this.checkTask(1, {
          message: '审核通过',
          type: 'success'
        })
      })
      .catch(() => {
        this.cancel()
      });
    },
    /**
     * @desc 拒绝
     */
    refuse() {
      this.$confirm('确定要拒绝当前任务么？', '确认提醒', {
        type: 'warning'
        })
      .then(() => {
        this.checkTask(-1, {
          message: '审核不通过',
          type: 'error'
        })
      })
      .catch(() => {});
    },
    cancel() {
      console.log('cancel')
      this.$emit('update', 'showReviewInfo', false)
    }
  },
  computed: {
    
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../../less/main.less');
.new-task-review{
  // position: relative;
  z-index: 3;
  width: 375px;
  height: 580px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: @white;
  border-radius: 12px;
  box-shadow: 0 0 8px 8px #eee;
  padding-bottom: 80px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  /*滚动区域背景*/     
  &::-webkit-scrollbar-track-piece {
      background-color: @white;
      -webkit-border-radius: 6px;
  }  
  /*竖向滚动条*/      
  &::-webkit-scrollbar-thumb:vertical {
      height: 5px;
      background-color: #eee;
      -webkit-border-radius: 6px;
  }
  /*横向滚动条*/          
  &::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: red;
    -webkit-border-radius: 6px;
  }
  .task-cover{
    width: 100%;
    max-height: 240px;
    object-fit: cover;
  }
  .title{
    line-height: 32px;
    margin-top: 10px;
    font-size: 20px;
    padding: 0 10px;
  }
  .task-desc{
    padding: 0 10px;
    margin: 10px 0;
    font-size: 14px;
  }
  .line-num{
    padding: 0 10px;
    color: @primary;
  }
  .review-mark{
    margin-top: 20px;
    padding: 0 10px;
    .title{
      font-size: 16px;
    }
  }
  .btn-wrap{
    position: absolute;
    width: calc(100% - 70px);
    text-align: center;
    bottom: 60px;
    .el-button{
      width: 140px;
    }
  }
}
</style>
