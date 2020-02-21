<template>
  <div id="app-root" role="application">
    <home-view/>
  </div>
</template>

<script>
import HomeView from "./views/home";

export default {
  name: "App",
  components: {
    HomeView
  }
};
</script>

<style lang="scss" scoped>
#app-root {
  padding: 1rem;
}
</style>
