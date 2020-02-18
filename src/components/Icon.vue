<template>
  <Base :tagName="tagName" :class="['c-icon', classes]">
    <div class="inner">
      <svg width="100%" height="100%" viewBox="0 0 16 17">
        <use xlink:href="#icon-cog"></use>
      </svg>
    </div>
  </Base>
</template>

<script>
import VueTypes from "vue-types";
import Base from "./Base";

export default {
  name: "Icon",
  extends: Base,
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
        [this.sizeClasses]: this.size
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/core/index";

.Icon {
  content: "";
}
</style>