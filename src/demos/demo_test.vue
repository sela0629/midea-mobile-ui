<template>
  <!-- S  page -->
  <div class="page tpl">
    <div class="page__hd">
       <div class="page__title">this is a demo</div>
        <div class="page__desc">模板示例</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd" style="text-align:center;">
      
      示例模板demo(引入子模板)
      <tpl></tpl>
    </div>

    <!-- E  page__bd -->
    <!-- E  page -->
  </div>

</template>

<script>

  import tpl from '@/components/tpl/tpl'

  export default {
    name: 'app',
    components: {tpl},
    data () {
      return {
        msg: 'navbar demo',
        activeIndex: 1
      }
    },
    methods: {
      switchTab: function (e) {
        // e.target.dataset.index
        this.activeIndex = e.target.dataset.index
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
</style>
