<template>
  <div class="Block">
    <el-card class="card">
      <Box v-if="title" slot="header" center row alignX="space-between">
        <h2>{{title}}</h2>
        <p v-show="desc">{{desc}}</p>
        <div>
          <slot name="action"></slot>
        </div>
      </Box>

      <div class="main">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
import { Box } from 'vue-raw-ui'

export default {
  name: 'Block',
  components: {
    Box
  },
  props: ['title', 'desc']
}
</script>

<style lang="less" scoped>
@import '../less/main.less';

.Block {
  margin-bottom: 10px;

  h2 {
    .largeTitle();
  }

  p {
    margin-right: auto;
    margin-left: 20px;
    color: @font-color-caption;
  }
}
.main {
  padding-left: 10px;
}
.card {
  border: none !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
