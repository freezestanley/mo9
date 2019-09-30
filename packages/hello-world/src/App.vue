<template>
  <div id="app">
    <HelloWorld/>
    <div>this is mater</div>
    <div @click="push">CLICK ME</div>
    <div @click="push2">CLICK ME2</div>
    <div @click="push3">CLICK ME3</div>
    <div ref="other2" id="helloworld2"></div>
    <div ref="other3" id="helloworld3"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import yyapp from '@/tailor';

let flag = false;
export default {
  name: "app",
  components: {
    HelloWorld
  },
  methods: {
    push() {
      test.n++
      history.pushState(null, null, "/other3");
      console.log(test.n)
    },
    push2() {
      history.pushState(null, null, "/other3/helloworld");
    },
    push3() {
      history.pushState(null, null, "/other2");
    }
  },
  mounted() {
    if (flag) {
      return;
    }
    flag = true;
    yyapp.registerApps([
      {
        name: "other",
        application_name: "other",
        entry: "http://localhost:7010",
        contain: this.$refs.other2,
        baseUrl: "/other2",
        canActive() {
          return location.pathname.startsWith("/other2");
        }
      },
      {
        name: "fragmentvue",
        application_name: "fragmentvue",
        entry: "http://localhost:7020",
        contain: this.$refs.other3,
        baseUrl: "/other3",
        canActive() {
          return location.pathname.startsWith("/other3");
        }
      }
    ]);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
