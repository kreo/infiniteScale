<template>
  <Base :tagName="tagName" :class="['c-button', classes]">
    <div class="inner">
      <span v-if="hasIconBefore" class="icon">
        <Icon tagName="i" size="md"/>
      </span>
      
      <span v-if="hasText" class="text">{{ text }}</span>
      
      <span v-if="hasIconAfter" class="icon">
        <svg width="100%" height="100%" viewBox="0 0 16 17">
          <use xlink:href="#icon-cog"></use>
        </svg>
      </span>
    </div>
  </Base>
</template>

<script>
import VueTypes from "vue-types";
import Base from "./Base";
import Icon from "./Icon";

export default {
  name: "Button",
  extends: Base,
  components: {
    Icon
  },
  data() {
    return {};
  },
  props: {
    tagName: VueTypes.string.def("button"),
    hasText: VueTypes.bool.def(true),
    text: VueTypes.string.def("Button inherit"),
    hasIconBefore: VueTypes.bool.def(true),
    hasIconAfter: VueTypes.bool.def(true)
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

.Button {
  content: "";
  background: red;
}
</style>