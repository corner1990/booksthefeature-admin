<template>
  <div class="order-over">
    <h2 class="main-title">任务模版</h2>
    <div class="task-info">
      <h3 class="title">任务信息</h3>
      <div class="info-box">
        <div class="info-line">
          <p class="label">任务名称：</p>
          <p class="info-content">{{ info.task_name ? info.task_name : '' }}</p>
        </div>
        <div class="info-line">
          <p class="label">任务描述：</p>
          <p class="info-content">{{ info.task_desc ? info.task_desc : '' }}</p>
        </div>
        <div class="info-line">
          <div class="info-line">
          <p class="label">用户计划：</p>
          <p class="info-content">{{ info.task_order_name ? info.task_order_name : '' }}</p>
        </div>
        <div class="info-line">
          <p class="label">用户备注：</p>
          <p class="info-content">{{ info.user_remark ? info.user_remark : '' }}</p>
        </div>
        </div>
        <div class="info-line">
          <div class="info-line">
              <p class="label">任务序号：</p>
              <p class="info-content">
                {{ info.task_order_sn ? info.task_order_sn : '' }}

              </p>
            </div>
            <div class="info-line">
              <p class="label">任务时间：</p>
              <p class="info-content">
                {{ info.start_date ? info.start_date.replace(timeReg, '$1-$2-$3') : '' }}
                至
                {{ info.end_date ? info.end_date.replace(timeReg, '$1-$2-$3') : '' }}

              </p>
            </div>
        </div>
        <div class="info-line">
          <div class="info-line">
              <p class="label">最大押金：</p>
              <p class="info-content">
                &yen;{{ taskInfo.display_max_amount }}
              </p>
            </div>
            <div class="info-line">
              <p class="label">最小押金：</p>
              <p class="info-content">
                &yen;{{ taskInfo.display_min_amount }}

              </p>
            </div>
        </div>
        <div class="info-line">
          <div class="info-line">
              <p class="label">支付押金：</p>
              <p class="info-content">
                &yen;{{ info.display_bet_amount ? info.display_bet_amount : '' }}

              </p>
            </div>
            <div class="info-line">
              <p class="label">预计奖金：</p>
              <p class="info-content">
                &yen;{{ info|filterReward }}

              </p>
            </div>
        </div>
      </div>
      <div class="info-line">
        <div class="info-line">
            <p class="label">收款人：</p>
            <p class="info-content">
              {{ info.card_owner ? info.card_owner : '' }}

            </p>
          </div>
          <div class="info-line">
            <p class="label">收款银行：</p>
            <p class="info-content">
              {{ info.card_bank ? info.card_bank : '' }}
            </p>
        </div>
      </div>
      <div class="info-line">
        <div class="info-line">
            <p class="label">银行卡号：</p>
            <p class="info-content">
              {{ info.card_no ? info.card_no : '' }}

            </p>
          </div>
      </div>
      
    </div>
    <div class="task-checkins">
      <h3 class="title">打卡记录</h3>

      <div class="checkin-list">
        <div
          class="checkin-item"
          v-for="(item, key) in logs"
          :key="key"
          @click="showLog(item)"
        >
          <img
            :src="item.sign_data_detail.data_list[0].data_link"
            alt=""
            class="check-item"
          >
          <p class="check-time">{{ getTime(item.created_timestamp) }}</p>
          <p class="check-remark">{{ item.sign_content ? item.sign_content : '' }}</p>
        </div>
      </div>
      <div class="no-log" v-show="logs.length == 0">
        暂无打卡记录
      </div>
    </div>
    <div
      class="operation-btn-wrap"
      v-if="info.task_order_status == 1 ||  info.task_order_status == 30"
    >
      <h4 class="chech-title">审核</h4>
      <div>
        <el-input
          type="textarea"
          class="sign_check_remark"
          placeholder="请输入审核备注"
          v-model="check_remark"
        />
      </div>
      <el-button
        type="primary"
        plain
        @click="pass"
        :disabled="checkDisbled"
      >审核通过</el-button>

      <el-button
        type="danger"
        plain
        @click="refuse"
        :disabled="checkDisbled"
      >审核不通过</el-button>
    </div>
    <el-dialog title="打卡记录" :visible.sync="showCheckInLog">
      <div class="check-log">
        <img
            :src="logInfo.sign_data_detail.data_list[0].data_link"
            alt=""
            class="check-item"
          >
          <p class="check-time">{{ getTime(logInfo.created_timestamp) }}</p>
          <p class="check-remark">{{ logInfo.sign_content ? logInfo.sign_content : '' }}</p>
      </div>
    </el-dialog>
    <el-dialog
      title="奖金发放提示"
      :visible.sync="sendRewardVisable"
      width="30%"
      top="20%"
      center>
      <span>您已经审核通过改任务，请联系给该任务人发放奖金！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sendRewardVisable = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { checkTaskOrder, checkTaskOrderSign } from './api'
import { dateFormat } from '../../utils/utils'
import { getTaskDetail } from '../product/api'
export default {
  name: 'order-over',
  data() {
    return {
      info: {
        sign_record_list: []
      },
      timeReg: /([\d]{4})([\d]{2})([\d]{2})/,
      showCheckInLog: false,
      check_remark: '',
      logInfo: {
        created_timestamp: 0,
        sign_content: '',
        sign_data_detail: {
          data_list: [{}]
        }
      },
      taskInfo: {
        display_max_amount: 0,
        display_min_amount: 0
      },
      sendRewardVisable: false
    }
  },
  methods: {
    /**
     * @desc 展示信息
     */
   showLog(info) {
     this.logInfo = info
     this.$nextTick(() => {
       this.showCheckInLog = true
     })
   },
    async checkTask(check_result, msg) {
      let { task_order_sn } = this.info
      let { check_remark } = this
      let params = { check_result, task_order_sn, check_remark }
      let task_order_status = check_result >= 0 ? 20 : 100
      let { errorCode } = await checkTaskOrder(params)
      if (errorCode == 0) {
        this.$message(msg)
        this.info.task_order_status = task_order_status
        localStorage.setItem('$taskOverInfo', JSON.stringify(this.info))
        this.cancel()
      }
    },
    /**
     * @desc 最终审核
     */
    async checkTaskFinsh(sign_check_result, msg) {
      let { task_order_sn } = this.info
      let { check_remark } = this
      let params = { sign_check_result, task_order_sn, sign_check_remark: check_remark }
      let task_order_status = sign_check_result >= 0 ? 20 : 100
      let { errorCode } = await checkTaskOrderSign(params)
      if (errorCode == 0) {
        this.$message(msg)
        this.info.task_order_status = task_order_status
        localStorage.setItem('$taskOverInfo', JSON.stringify(this.info))
        if (sign_check_result == 1) {
          this.sendRewardVisable = true
          
        }
        this.cancel()
      }
    },
    getTime(num) {
      let t = new Date(num * 1000)
      let res  = dateFormat(t)
      return res
    },
    /**
     * @desc 通过
     */
    pass() {
      
      this.$confirm('确定通过当前任务么？', '确认提醒', {
        type: 'warning'
        })
      .then(() => {
        if (this.info.task_order_status == 1) {
          // checkTaskFinsh
          this.checkTask(1, {
            message: '审核通过',
            type: 'success'
          })
        }
        if (this.info.task_order_status == 30) {
          // checkTaskFinsh
          this.checkTaskFinsh(1, {
            message: '审核通过',
            type: 'success'
          })
        }
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
        if (this.info.task_order_status == 1) {
          // checkTaskFinsh
          this.checkTask(-1, {
            message: '审核不通过',
            type: 'error'
          })
        }
        if (this.info.task_order_status == 30) {
          // checkTaskFinsh
          this.checkTaskFinsh(-1, {
            message: '审核不通过',
            type: 'error'
          })
        }
      })
      .catch(() => {});
    },
    cancel() {
      console.log('cancel')
    },
    /**
     * @desc 加载详情
     */
    async loadTaskInfo(task_id) {
      let { errorCode, data } = await getTaskDetail({task_id})
      if (errorCode == 0) {
        this.taskInfo = data
      }
    }
  },
  filters: {
    filterReward(info) {
      if (!info) return 0
      let { reward_rate, bet_amount } = info
      return (bet_amount * reward_rate) / 10000
    }
  },
  computed: {
    checkDisbled() {
      let res = true
      let { task_order_status } = this.info
      let arr = [1, 30]
      if (arr.includes(task_order_status)) {
        return false
      }
      return res
    },
    logs() {
      let { sign_record_list } = this.info
      return sign_record_list
    }
  },
  mounted() {
    let info = localStorage.getItem('$taskOverInfo')
    if (!info) {
      return
    }
    this.info = JSON.parse(info)
    this.loadTaskInfo(this.info.task_id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.order-over{
  // background: #fff;
  // padding: 0 20px;
  overflow: auto;
  max-height: calc(100vh - 160px);
  .main-title{
    background: #fff;
    padding: 10px 15px;
    border-bottom: 1px solid #eee
  }
  .title{
    border-bottom: 1px solid #00b4fc;
    line-height: 32px;
    margin-bottom: 12px;
    color: #00b4fc;
  }
  .task-info{
    padding: 10px 20px 0;
    margin-top: 16px;
    background: #fff;
  }
  .info-box{
    padding: 20px 0;
  }
  .info-line{
    display: flex;
    justify-content: flex-start;
    line-height: 32px;
    flex: 1;
    .label{
      min-width: 100px;
      font-weight: 700;
    }
  }
  .task-checkins{
    margin: 20px 0;
    background: #fff;
    padding: 10px 20px 20px;
  }
  .checkin-list{
    display: flex;
    flex-wrap: wrap;

    .checkin-item{
      width: 200px;
      margin: 0 12px 12px 0;
      cursor: pointer;
      img{
        max-width: 100%;
        max-height: 200px;
        object-fit: cover;
      }
    }
    .check-remark{
      overflow:hidden; 
      text-overflow:ellipsis;
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp: 2; 
    }
  }
  .no-log{
    padding: 40px;
    text-align: center;
    color: rgba(0, 0, 0, .65);
  }
  .check-log{
    width: 100%;
    text-align: center;
    
    img{
      max-width: 100%;
      max-height: 500px;
      object-fit: contain;
    }
    .log-remark{
      text-align: left;
    }
  }
  .operation-btn-wrap{
    position: fixed;
    right: 40px;
    top: 380px;
    min-width: 200px;
    background: #fff;
    padding: 10px;
    box-shadow: 0 0 3px 3px #eee;
    border-radius: 5px;
    .sign_check_remark{
      margin: 10px 0;
    }
  }
}
</style>
