<template>
  <Skel :tagName="tagName" :class="['media', classes]">
      <slot></slot>
  </Skel>
</template>

<script>
import VueTypes from "vue-types";
import Skel from "./Skel";

export default {
  name: "Media",
  extends: Skel,
  components: {},
  data() {
    return {};
  },
  props: {
    tagName: VueTypes.string.def("i")
  },
  computed: {
    classes() {
      return {
        [this.scalableClasses]: this.scalable,
        [this.scaleClasses]: this.scale
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/core/index";

.media {
  content: "";
}
</style>
