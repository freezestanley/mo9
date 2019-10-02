<template>
  <div id="app" class="child">
    <div>This is fragment-vue-child</div>
    <div @click="push">switch child hello</div>
    <div @click="push2">switch child world</div>
    <div @click="handleClick">Trigger Global Event</div>
    <div @click="handleClick2">Trigger Instance Event</div>
    <div>==============================================</div>
    <router-view></router-view>
  </div>
</template>

<script>
import chaoxi, { globalEvent } from 'chaoxi'
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
    },
    handleClick(){
      globalEvent.emit('global-test-event', 'message from fragment-vue-child')
    },
    handleClick2(){
      chaoxi.emit('instance-test-event', 'message from internal')
    }
  },
  components: {
  }
}
</script>

<style>
:namespace#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
