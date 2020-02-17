<template>
  <div id="app">
    <InfiniteScale/>
  </div>
</template>

<script>
import Skel from "./components/Skel";
import InfiniteScale from "./components/InfiniteScale";

export default {
  name: "App",
  components: {
    Skel,
    InfiniteScale
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding: 1rem;
}
</style>
