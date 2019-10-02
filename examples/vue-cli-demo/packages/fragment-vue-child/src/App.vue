<template>
  <div id="app" class="child">
    <div>This is fragment-vue-child</div>
    <div @click="push">switch child hello</div>
    <div @click="push2">switch child world</div>
    <div @click="handleClick">Trigger Global Event</div>
    <div @click="handleClick2">Trigger Instance Event</div>
    <div @click="grandchild">grandchild</div>
    <div>==============================================</div>
    <div ref="grandson" id="grandson"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import chaoxi, { globalEvent } from 'chaoxi'
export default {
  name: 'app',
  mounted() {
    debugger
        const appinfo = [
        {
          name: "a3",
          application_name: "grandson",
          entry: "http://localhost:8099/app",
          contain: this.$refs.grandson,
          baseUrl: "/grandson",
          canActive() {
            return location.pathname.startsWith("/other2/grandson");
          }
        }
      ]
      chaoxi.baseUrl = '/other2'
      chaoxi.registerApps(appinfo)

  },
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
      alert('asdfasdfasdf')
      globalEvent.emit('global-test-event', 'message from fragment-vue-child')
    },
    handleClick2(){
      chaoxi.emit('instance-test-event', 'message from internal')
    },
    grandchild () {
      this.$router.push({
        path: '/grandson'
      })
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
