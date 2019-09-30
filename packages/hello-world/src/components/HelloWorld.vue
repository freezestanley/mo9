<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="push">123123123123132</div>
  </div>
</template>

<script>
import test from 'test'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    push() {
      console.log('hw: ' + test.n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
