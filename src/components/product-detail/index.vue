<template>
  <div class="task-detail">
    <img :src="info.task_cover" alt="img" srcset="" class="task-cover">
    <h3 class="title">{{info.task_name}}</h3>
    <p class="task-desc">{{ info.task_desc }}</p>
    <p class="line-num">最大押金：{{ info.display_max_amount }}</p>
    <p class="line-num">最小押金：{{ info.display_min_amount }}</p>
    <p class="line-num">回报奖金：{{ info.display_reward_rate }}</p>
    <p class="update-tiem">{{ info.updated_timestamp }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'task-detail',
  components: {},
  computed: {
    ...mapState('product', ['info']),
    
  },
  mounted() {
    console.log('info', this.info)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import url('../../less/main.less');
.task-detail{
  position: relative;
  z-index: 3;
  width: 375px;
  height: 667px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: @white;
  border-radius: 12px;
  box-shadow: 0 0 8px 8px #eee;
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
  
}
</style>
