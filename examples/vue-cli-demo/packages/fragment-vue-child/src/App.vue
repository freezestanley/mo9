<template>
  <div id="app" :class="name">
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
import Chaoxi, {globalEvent} from './global'
export default {
  name: 'app',
   data: function () {
    return {
      name: Chaoxi.classNamespace
    }
  },
  mounted() {
    debugger
        const appinfo = [
        {
          name: "a3",
          application_name: "grandson",
          entry: "http://localhost:8099/app",
          contain: this.$refs.grandson,
          baseUrl: "/grandson",
          canActive(path) {
            debugger
            console.log('@@@@@@@@@@@@@@###')
            return location.pathname.startsWith(this.baseUrl);
          }
        }
      ]
      Chaoxi.registerApps(appinfo)

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
      Chaoxi.emit('instance-test-event', 'message from internal')
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
