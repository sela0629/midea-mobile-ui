<template>
  <!-- S  page -->
  <div class="page navbar">
   <!--  <div class="page__hd">
      <div class="page__title">Navbar</div>
    </div> -->

    <!-- S  page__bd -->

    <div class="page__bd">

    <div class="midea-cells__title">带说明的列表项</div>
      <div class="midea-cells">
        <div class="midea-cell">
          <div class="midea-cell__bd"><p>标题文字</p></div>
          <div class="midea-cell__ft">说明文字</div>
        </div>
      </div>
      <div class="midea-cells__title">带图标、说明的列表项</div>
      <div class="midea-cells">
        <div class="midea-cell">
          <div class="midea-cell__hd">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block">
          </div>
          <div class="midea-cell__bd"><p>标题文字</p></div>
          <div class="midea-cell__ft">说明文字</div>
        </div>
        <div class="midea-cell">
          <div class="midea-cell__hd">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block">
          </div>
          <div class="midea-cell__bd"><p>标题文字</p></div>
          <div class="midea-cell__ft">说明文字</div>
        </div>
      </div>
      
      <!-- S 带跳转的列表项 -->
      <div class="midea-cells__title">带跳转的列表项</div>
      <div class="midea-cells">
        <a class="midea-cell midea-cell_access" href="#">
          <div class="midea-cell__bd">cell container</div>
          <div class="midea-cell__ft">说明文字</div>
        </a>
        <a class="midea-cell midea-cell_access" href="#">
          <div class="midea-cell__bd">cell container</div>
          <div class="midea-cell__ft">说明文字</div>
        </a>
      </div>
      <!-- E 带跳转的列表项 --> 

    </div>

    <!-- E  page__bd -->
    
  </div>
<!-- E  page -->
</template>
<script>
  import navbarTpl from '@/components/cell/cell'

  export default {
    components: {navbarTpl},
    data () {
      return {
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