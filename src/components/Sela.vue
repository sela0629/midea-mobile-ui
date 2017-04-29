<template>
<div>
<p class="flag">S sela.vue</p>
<h1>{{ msg }}</h1>
<p class="flag">E sela.vue</p>
</div>
</template>

<script>
export default {
  name: 'sela',
  data () {
    return {
      msg: 'sela 哈哈哈'
    }
  }
}
</script>

<style scoped>
.flag {
  background: green;
}
</style>
