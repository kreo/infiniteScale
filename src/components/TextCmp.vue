<template>
  <Skel :tagName="tagName" :class="['text', classes]">
      <slot></slot>
  </Skel>
</template>

<script>
import VueTypes from "vue-types";
import Skel from "./Skel";

export default {
  name: "TextCmp",
  extends: Skel,
  components: {},
  data() {
    return {};
  },
  props: {
    tagName: VueTypes.string.def("span")
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

.text {
  content: "";
}
</style>
