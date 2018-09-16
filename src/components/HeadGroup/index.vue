<template>
  <div class="avatar-container">
    <el-dropdown class="avater-list" trigger="click" placement="bottom">
      <div class="list-btn">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/40/h/40'">
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tooltip effect="dark" :content="$t('navbar.lang')" placement="bottom">
      <el-dropdown trigger="click" class='avater-list international' @command="handleSetLanguage">
        <div class="list-btn lang-btn">
          <svg-icon icon-class="wangluoanquanguanli" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-tooltip>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'headgroup',
  computed: {
    ...mapGetters([
      'avatar'
    ]),
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: this.$store.getters.language === 'en' ? 'switch language success' : '语言切换成功',
        type: 'success'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .avatar-container {
    float: right;
    height: 100%;
    padding: 5px 0;
    .avater-list{
      float: right;
      height: 36px;
      line-height: 36px;
      width: 36px;
      margin-left: 5px;
      text-align: center;
      .list-btn{
        cursor: pointer;
        width: 36px;
        height: 36px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
    .international{
      .list-btn{
        svg{
          font-size: 26px;
          vertical-align: middle;
          color: #409EFF;
        }
      }
    }
  }
</style>
