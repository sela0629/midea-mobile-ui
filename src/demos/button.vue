<template>
  <!-- S  page -->
  <div class="page button">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd">
    <!-- S 按钮模板 -->
    <buttonTpl type="primary">主操作按钮（Primary Normal）</buttonTpl>
    <buttonTpl type="primary" mode="disabled"> 操作按钮（Disabled）</buttonTpl>
    <buttonTpl type="primary" mode="loading">操作按钮（Loading）</buttonTpl>
    <buttonTpl type="default">次操作按钮（Default Normal）</buttonTpl>
    <buttonTpl type="default" mode="disabled">次操作按钮（Disabled）</buttonTpl>
    <buttonTpl type="default" mode="loading">次操作按钮（Loading）</buttonTpl>
    <!-- E 按钮模板 -->  

    </div>

    <!-- E  page__bd -->
    
  </div>
<!-- E  page -->
</template>

<script>
  import buttonTpl from '@/components/button/button'

  export default {
    components: {buttonTpl},
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

