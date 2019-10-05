<template>
  <div id="app" :class="name">
    <div>This is grandson</div>
    <div @click="push">switch grandson hello</div>
    <div @click="push2">switch grandson world</div>
    <div @click="handleClick">Trigger Global Event</div>
    <div @click="handleClick2">Trigger Instance Event</div>
    <div>==============================================</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Chaoxi, {globalEvent} from './global'
export default {
  name: 'app',
  data: function () {
    return {
      name: Chaoxi.classNamespace
    }
  },
  methods: {
    push() {
      debugger
      this.$router.push({
        path: 'aa'
      })
    },
    push2() {
      this.$router.push({
        path: 'bb'
      })
    },
    handleClick(){
      globalEvent.emit('global-test-event', 'message from fragment-vue-child')
    },
    handleClick2(){
      Chaoxi.emit('instance-test-event', 'message from internal')
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
