<template>
  <div id="app-root" role="application">
    <InfiniteScale />
  </div>
</template>

<script>
import InfiniteScale from "./components/InfiniteScale";

export default {
  name: "App",
  components: {
    InfiniteScale
  }
};
</script>

<style lang="scss" scoped>
#app-root {
  padding: 1rem;
}
</style>
