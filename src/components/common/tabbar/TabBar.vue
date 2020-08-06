<template>
  <div id="tab-bar">
      <slot>
          <div class="tab-bar-item">首页</div>
          <div class="tab-bar-item">分类</div>
          <div class="tab-bar-item">购物车</div>
          <div class="tab-bar-item">我的</div>
      </slot>  
  </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 2px rgba(100, 100, 100, 0.1);
  }
</style>
