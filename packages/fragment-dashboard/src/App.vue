<template>
  <div id="vue-dashboard-app" class="dashboard">
    <Widgets></Widgets>
    <router-view></router-view>
  </div>
</template>

<script>
// import Router from 'vue-router'
import Widgets from './components/Widgets'

export default {
  name: 'App',
  components: {
    Widgets
  }
}
</script>

<style>
.dashboard{
  text-align: center;
  color: #2c3e50;
  background:#fff;;
  /* margin-top: 60px; */
  margin:10px;
  border:1px solid #000;
}
</style>
