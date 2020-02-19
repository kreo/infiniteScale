<template>
  <Skel
    :tagName="tagName"
    :role="role"
    :class="['c-button', classes]"
    :href="getLink"
  >
    <div class="inner">
      <span v-if="hasIconBefore" class="icon">
        <Icon size="md" />
      </span>

      <span v-if="hasText" class="text">{{ text }}</span>

      <span v-if="hasIconAfter" class="icon">
        <svg width="100%" height="100%" viewBox="0 0 16 17">
          <use xlink:href="#icon-cog"></use>
        </svg>
      </span>
    </div>
  </Skel>
</template>

<script>
import VueTypes from "vue-types";
import Skel from "./Skel";
import Icon from "./Icon";

export default {
  name: "Button",
  extends: Skel,
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
    hasIconAfter: VueTypes.bool.def(true),
    role: VueTypes.string.def("button"),
    link: VueTypes.string
  },
  computed: {
    classes() {
      return {
        [this.scalableClasses]: this.scalable,
        [this.sizeClasses]: this.size
      };
    },
    getLink() {
      return this.tagName === "a" ? this.href : null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/core/index";

.c-button {
  content: "";
}
</style>
