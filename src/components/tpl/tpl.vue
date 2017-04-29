<template>
  <!-- S  page -->
  <div class="page navbar">
    <!-- <div class="page__hd"> -->
    
    <!-- </div> -->

    <!-- S  page__bd -->

    <div class="page__bd">
      

    </div>

    <!-- E  page__bd -->
    <!-- E  page -->
  </div>

</template>

<script>
  export default {
    name: 'navbar',
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
  @import "../../common/function";
  @import "../../common/var";
  
</style>
