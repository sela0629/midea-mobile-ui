<template>
  <!-- S  page -->
  <div class="page navbar">
   <!--  <div class="page__hd">
      <div class="page__title">Navbar</div>
    </div> -->

    <!-- S  page__bd -->

    <div class="page__bd">

    <!-- S Navbar模板 -->

    <navbarTpl :navbarData = "navbar"></navbarTpl>

    <!-- E Navbar模板 -->  

    </div>

    <!-- E  page__bd -->
    
  </div>
<!-- E  page -->
</template>
<script type="text/template" id="tpl">
</script>
<script>
  import navbarTpl from '@/components/navbar/navbar'

  export default {
    components: {navbarTpl},
    data () {
      return {
        navbar: {
          diyClass : 'diyClass',
          arrItems : [
          {
          navName: '选项一',
          panelHtml: '<div>1111111111111111111</div>'
          },
          {
          navName: '选项二',
          panelHtml: '<div>22222222222222</div>'
          },
          {
          navName: '选项三',
          panelHtml: '<div>33333333333333</div>'
          }
        ]
        }
      }
    },
    methods: {
    }
  }
</script>

<style type="text/css">
  .diyClass{
    background: lightblue;
  }
</style>