<!-- 根组件，所有的子组件都将在这里被引用 -->

<template>
  <div id="app">
<!--  <p class="flag">S app.vue</p>
    <img src="./assets/logo.png">
    <p class="flag">S router-view (它用于渲染匹配的组件。)</p> -->
    <div class="page page-demo" v-bind:class="{ hide: isHide }">
   <!--  <h1>CSS Components</h1>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
    <router-link class="item" to="/header">Header</router-link>
    <router-link class="item" to="/dialog">Dialog</router-link>
    <router-link class="item" to="/hello">Go to hello</router-link>
    <router-link class="item" to="/sela">Go to Bar</router-link> -->
    <div class="page__hd">
      
    <h1 class="page__title">Midea UI 组件</h1>
    </div>
    <div class="page__bd">
      <div class="midea-cells">
         <router-link  v-on:click.native="hideCategory" to="/header" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Header</div>
          <div class="midea-cell__ft">头部</div>
        </router-link>
         <router-link  v-on:click.native="hideCategory" to="/cell" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Cell</div>
          <div class="midea-cell__ft">单元</div>
        </router-link>
         <router-link  v-on:click.native="hideCategory" to="/navbar" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Navbar</div>
          <div class="midea-cell__ft">导航</div>
        </router-link>
         <router-link  v-on:click.native="hideCategory" to="/tabbar" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Tabbar</div>
          <div class="midea-cell__ft">底部导航</div>
        </router-link>
         <router-link  v-on:click.native="hideCategory" to="/button" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Button</div>
          <div class="midea-cell__ft">按钮</div>
        </router-link>
        <router-link  v-on:click.native="hideCategory" to="/dialog" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Dialog</div>
          <div class="midea-cell__ft">弹窗</div>
        </router-link>
        <router-link  v-on:click.native="hideCategory" to="/toast" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">Toast</div>
          <div class="midea-cell__ft">提示弹窗</div>
        </router-link>
         <router-link  v-on:click.native="hideCategory" to="/demoTest" class="midea-cell midea-cell_access">
          <div class="midea-cell__bd">demoTest</div>
          <div class="midea-cell__ft">例子</div>
        </router-link>
      </div>
</div>

</div>
<router-view></router-view>
<!-- <p class="flag">E router-view </p> -->
<!-- <p class="flag">E app.vue</p> -->
</div>

</template>

<script>
// import router from 'vue-router'
export default {
  name: 'app',
  data () {
    return {
      counter: 0,
      isHide: 0
    }
  },
  methods: {
    // 隐藏目录
    hideCategory: function () {
      // this.isHide = 1
    }
  }
}
</script>

<style lang='scss'>
  .hide{
    display: none;
  }
  .page{
    background: #f8f8f8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &__hd{
      padding: 40px;
    }
    &__bd{
    }
    /* 间距 */
    &__bd > .midea-header {
      margin-bottom: 15px;

    }
    &__title {
      text-align: left;
      font-size: 20px;
      font-weight: 400
    }

    &__desc {
      margin-top: 5px;
      color: #888;
      text-align: left;
      font-size: 14px
    }

  }
  .page.button .page__bd{
    padding: 0 15px;
  }
  .page.dialog {
    background: #fff;
  }
  .dialog,.toast
  {
    .page__bd{
      padding:0 20px;
    }
  } 
</style>
