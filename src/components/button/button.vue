<template>
 <a href="javascript:;" class="midea-btn midea-btn_primary" v-bind:class="['midea-btn',
    'midea-btn_'+type,mode==''?'':'midea-btn_'+mode
    ]">{{text}}
    <slot></slot>
    </a>
</template>

<script>
  export default {
    name: 'button',
    data () {
      return {
      }
    },
    props: {
      // default primary
      type: {
        required: false,
        default: 'default'
      },
      // loading disabled
      mode: {
        required: false,
        default: ''
      },
      // loading disabled
      text: {
        type: String,
        default: ''
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  @import "../../common/function";
  @import "../../common/var";
  .midea-btn{
    display: block;
    padding-left: 14px;
    padding-right: 14px;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    line-height: 2.56;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    &_primary{
      background-color: $midea-blue; 
    }
    &_default{
      color: #000000;
      background-color: #F8F8F8;
    }

    &_disabled{
      color: rgba(255,255,255,.6);
      background: $disable-blue;
    }
    &_default.midea-btn_disabled{
      color: rgba(0,0,0,.6);
      background: #F7F7F7;
    }
    &_loading{
      &:before{

      }
    }
 &:after{
      content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /*-webkit-transform: scale(0.5);
    transform: scale(0.5);*/
    @include transform(scale(.5));
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 10px;
    }
  }
  .midea-btn + .midea-btn{
    margin-top: 15px;
  }
</style>
