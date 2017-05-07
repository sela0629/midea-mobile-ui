<template>
  <!-- S  page -->
  <div class="page dialog">
    <div class="page__hd">
      <div class="page__title">Dialog</div>
    </div>

    <!-- S  page__bd -->

    <div class="page__bd">

    <!-- 通用按钮 primary -->
    <a href="javascript:;" @click="popOneButtonDialog" class="midea-btn midea-btn_primary">Dialog样式（两个按钮）</a>

    <!-- 通用按钮 primary -->
    <a href="javascript:;" v-on:click="popOneButtonDialog2" class="midea-btn midea-btn_default">Dialog样式（一个按钮）</a>
    
    <!-- S 弹窗模板 -->
    <dialogTpl :arrButton="dialog.arrButton" :title="dialog.title" :tip="dialog.tip" :isShowDialog="dialog.isShowDialog" @hidePop="change(0)" ></dialogTpl>
    <!-- E 弹窗模板 -->  

    </div>

    <!-- E  page__bd -->
    
  </div>
<!-- E  page -->
</template>

<script>
  import dialogTpl from '@/components/dialog/dialog'

  export default {
    components: {dialogTpl},
    data () {
      return {
        // 初始化弹窗数据
        dialog: {
          title: '',
          tip: '',
          isShowDialog: 0,
          arrButton: [
            {
              name: '',
              class: '',
              onClick () {
              }
            }
          ]
        }
      }
    },
    methods: {
      // 一个按钮
      popOneButtonDialog () {
        console.log('_this')
        let _this = this
        let _dialog = _this.dialog
        _dialog.title = '两个按钮弹窗标题'
        _dialog.tip = '两个按钮弹窗tip，两个按钮弹窗tip'
        _dialog.arrButton = [
          {
            name: 'left btn',
            class: 'default',
            onClick () {
              _this.dialog.isShowDialog = 0
              console.log('arrButton left')
            }
          },
          {
            name: 'right btn',
            class: 'primary',
            onClick () {
              _this.dialog.isShowDialog = 0
              console.log('arrButton right')
            }
          }
        ]
        _this.dialog.isShowDialog = !this.dialog.isShowDialog
      },
      // 一个按钮
      popOneButtonDialog2 () {
        console.log('_this')
        let _this = this
        let _dialog = _this.dialog
        _dialog.title = '一个按钮弹窗标题'
        _dialog.tip = '一个按钮弹窗tip，一个按钮弹窗tip'
        _dialog.arrButton = [
          {
            name: 'right btn',
            class: 'primary',
            onClick () {
              _this.dialog.isShowDialog = 0
              console.log('arrButton right')
            }
          }
        ]
        _this.dialog.isShowDialog = !this.dialog.isShowDialog
      },
      change: function (isShowDialog) {
        // e.target.dataset.index
        // this.isShowDialog = isShowDialog
        // console.log(isShowDialog)
        // console.log('change')
      }
    }
  }
</script>

