<template>
  <div id="app" class="master">
    <div>This is fragment-vue-master</div>
    <div @click="push">switch master hello</div>
    <div @click="push2">switch master world</div>
    <div @click="push3">switch application</div>
    <div @click="push4">@@@@@@@@@@@</div>
    <router-view></router-view>
    <div>==============================================</div>
    <div ref="other2" id="other2" style="background:#ccc;border:1px solid;"></div>
    <div>--------------------------------------------------</div>
    <div ref="other3" id="other3" style="background:#666;border:1px solid;"></div>
    
  </div>
</template>

<script>
import yyapp from 'chaoxi'

export default {
  name: 'app',
  methods: {
    push() {
      this.$router.push({
        name:'hello',
        params: { userId: '123' }
      })
    },
    push2() {
      this.$router.push({
        path: "/world",
        query: { plan: 'private' }
      })
    },
    push3() {
      this.$router.push('/other2/hello')
    },
    push4() {
      this.$router.push('/other3/hello')
    }
  },
  mounted() {
    const appinfo = [
      {
        name: "a1",
        application_name: "child",
        entry: "http://localhost:8082/app",
        contain: this.$refs.other2,
        baseUrl: "/other2",
        canActive() {
          return location.pathname.startsWith("/other2");
        }
      },
      {
        name: "a2",
        application_name: "child",
        entry: "http://localhost:8082/app",
        contain: this.$refs.other3,
        baseUrl: "/other3",
        canActive() {
          return location.pathname.startsWith("/other3");
        }
      }
    ]
    yyapp.baseUrl = ''
    yyapp.registerApps(appinfo)
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
