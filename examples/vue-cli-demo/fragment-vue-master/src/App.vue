<template>
  <div id="app">
    <div>This is fragment-vue-master</div>
    <div @click="push">switch hello</div>
    <div @click="push2">switch world</div>
    <div>==============================================</div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    push() {
      this.$router.push({
        path: 'hello'
      })
    },
    push2() {
      this.$router.push({
        path: 'world'
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
