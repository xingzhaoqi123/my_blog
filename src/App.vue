<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Nav";
export default {
    components: { NavBar },
    name: "App"
};
</script>
<style lang="less" scoped>
</style>
