<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  data () {
    return {
      msg: 'dialog demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

.hello {
  background: red;
  h1{
    color: green;
  }
}

</style>
