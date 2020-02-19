<template>
  <div id="app-root" role="application">
    <infinite-scale-cmp />
  </div>
</template>

<script>
import InfiniteScaleCmp from "./components/infinite-scale-cmp";

export default {
  name: "App",
  components: {
    InfiniteScaleCmp
  }
};
</script>

<style lang="scss" scoped>
#app-root {
  padding: 1rem;
}
</style>
