<template>
  <!-- S  page -->
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Header</div>
       <div class="page__desc">常用标题&自定义内容</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd">

    <!-- S Header模板 -->

    <!-- 固定在顶部 -->
    <headerTpl posMode="fix" backMode="back" backContent="返回">固定在顶部</headerTpl>

    <!-- 普通样式，不含<图标；含<图标加个修饰符 midea-header_back(默认没有返回图标) 应该加在头部 -->
    <headerTpl backContent="返回">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</headerTpl>

     <!-- 有返回图标样式 -->
    <headerTpl backMode="back" backContent="返回">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</headerTpl>

     <!-- 有返回图标样式+ft 编辑按钮 -->
    <headerTpl backMode="back" backContent="返回" :right="header.right">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</headerTpl>

    <!-- 左侧无文字,仅图标+ft 编辑按钮 -->
    <headerTpl backMode="back">标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</headerTpl>

    <!-- 左侧无文字,无图标+ft 编辑按钮 -->
    <headerTpl>标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，标题过长会隐藏后面内容，</headerTpl>

     <!-- 自定义左侧和右侧内容 -->
    <headerTpl headerMode="diy" :left="diyHeader.left" :right="diyHeader.right">我是自定义，自定义哈哈哈哈哈哈哈</headerTpl>

    <!-- E Header模板 -->  

    </div>

    <!-- E  page__bd -->
    
  </div>
<!-- E  page -->
</template>

<script>
  import headerTpl from '@/components/header/header'

  export default {
    components: {headerTpl},
    data () {
      return {
        header: {
          right: {
            name: '编辑',
            onClick () {
              alert('触发编辑事件')
            }
          }
        },
        diyHeader: {
          left: {
            name: '',
            html: '<div class="selaHeader">哈哈哈</div>',
            onClick () {
              alert('触发左侧事件')
            }
          },
          right: {
            name: '',
            html: '<div style="color:lightblue">右侧哈哈哈</div>',
            onClick () {
              alert('触发右侧事件')
            }
          }
        }
      }
    },
    methods: {
    }
  }
</script>

<style type="text/css">
  .selaHeader{
    background: #ccc;
  }
</style>