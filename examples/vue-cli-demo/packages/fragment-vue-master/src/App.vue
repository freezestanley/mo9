<template>
  <div id="app" :class="name">
    <div>This is fragment-vue-master</div>
    <div @click="push">切换 master hello</div>
    <div @click="push2">切换 master world</div>
    <div @click="push3">切换 子 application</div>
    <div @click="push4">切换 第2层的 grandson</div>
    <div @click="push5">切换 react </div>
    <router-view></router-view>
    <div>==============================================</div>
    <div ref="other2" id="other2" style="background:#ccc;border:1px solid;"></div>
    <div>--------------------------------------------------</div>
    <div ref="other3" id="other3" style="background:#666;border:1px solid;"></div>
    <div>--------------------------------------------------</div>
    <div ref="other4" id="other3" style="background:#f90;border:1px solid;"></div>
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
      console.log(Chaoxi)
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
      // this.$router.push('/other3/hello')
      this.$router.push('/grandson/hello')
    },
    push5() {
      // this.$router.push('/other3/hello')
      this.$router.push('/reactchild')
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
          name: "a44",
          application_name: "grandson",
          entry: "http://localhost:8099/app",
          contain: this.$refs.other3,
          baseUrl: "/grandson",
          canActive() {
            debugger
            return location.pathname.startsWith("/grandson");
          }
      },
      {
          name: "a45",
          application_name: "reactchild",
          entry: "http://localhost:5000/app",
          contain: this.$refs.other3,
          baseUrl: "/reactchild",
          canActive() {
            debugger
            return location.pathname.startsWith("/reactchild");
          }
      },
      // {
      //   name: "a2",
      //   application_name: "child",
      //   entry: "http://localhost:8082/app",
      //   contain: this.$refs.other3,
      //   baseUrl: "/other3",
      //   canActive() {
      //     return location.pathname.startsWith("/other3");
      //   }
      // }
    ]
    Chaoxi.registerApps(appinfo)
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
