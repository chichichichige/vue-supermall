<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive" >
          <slot name="item-icon"></slot>
      </div>
      <div v-else>
          <slot name="item-icon-active"></slot>
      </div>
      <div :style="activeStyle">
          <slot name="item-text"></slot>
      </div>     
      <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff5777'
    }
  },
  data() { 
    return {
        // isActive: true
    }
  },
  computed: {
    isActive() {
      //$route 是哪个路由活跃就指定哪个
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
 }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;/* 去除图片下的间隙 */
  }
  
</style>