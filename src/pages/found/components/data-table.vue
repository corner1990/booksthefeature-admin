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
        <el-table-column prop="name" label="图片" width="240" >
          <template slot-scope="scope">
              <div class="flex" @click="showImgFn(scope.row.data)">
                <img
                  class="banner-img"
                  :src="scope.row.feed_detail | initSrc"
                />
              <!-- <p class="product-name"> </p> -->
              </div>
            </template>
        </el-table-column>
        <el-table-column label="文字">
            <template slot-scope="scope"><el-tag type="success">{{scope.row.feed_detail.description}}</el-tag></template>
        </el-table-column>
        <!-- <el-table-column label="链接">
          <template slot-scope="scope">
            <el-tag>{{scope.row.link}}</el-tag>
          </template>
        </el-table-column> -->
        <el-table-column label="操作" width="120" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="editBanner(scope.row)">编辑</el-button>
            <el-button type="text" @click="confirmDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="showImg"
    >
      <img :src="src" class="big-banner" />
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { deleteBanner } from '../api';
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
      delList: [],
      tableData: [],
      showImg: false,
      src: ''
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
    editBanner(info) {
      this.$emit('update', 'editInfo', info)
      this.$emit('update', 'showEdit', true)
    },
    showImgFn(src) {
      if (!src) return ''
      let obj = JSON.parse(src)
      this.src = obj.image
      this.showImg = true
    },
    hideImgFn() {
      this.showImg = false
    },
    /**
     * @desc 确认删除
     */
    confirmDel(info) {
      this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delBanner(info)
      }).catch(() => {
              
      });
    },
    /**
     * @desc 删除banner
     */
    async delBanner(info) {
      let { feed_id } = info.feed_base_info
      let { errorCode } = await deleteBanner({feed_id })
      if (errorCode === 0) {
        this.$emit('refresh')
      }
    }
  },
  filters: {
    initSrc(info) {
      let  img = info.image_list[0]
      if (!img) return ''
      
      return img && img.image
    }
  },
  mounted() {
    this.tableData = this.list
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.data-table{
  max-height: calc(100vh - 160px);
  .product-name{
    margin-left: 10px;
  }
  .banner-img{
    max-width: 100px;
    max-height: 100px;
    object-fit: cover;
  }
  .big-banner{
    max-width: 100%;
  }
}
</style>
