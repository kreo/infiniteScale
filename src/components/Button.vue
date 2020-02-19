<template>
  <Skel
    :tagName="tagName"
    :role="role"
    :class="['button', classes]"
    :href="link"
  >

    <template v-if="hasBefore">
      <slot name="before"></slot>
    </template>

    <template v-if="hasContent">
      <slot name="content"></slot>
    </template>

    <template v-if="hasAfter">
      <slot name="after"></slot>
    </template>

  </Skel>
</template>

<script>
import VueTypes from "vue-types";
import Skel from "./Skel";
//import Icon from "./Icon";

export default {
  name: "Button",
  extends: Skel,
  components: {

  },
  data() {
    return {};
  },
  props: {
    tagName: VueTypes.string.def("button"),
    hasText: VueTypes.bool.def(true),
    text: VueTypes.string.def("Button inherit"),
    role: VueTypes.string.def("button"),
  },
  computed: {
    classes() {
      return {
        [this.scalableClasses]: this.scalable,
        [this.scaleClasses]: this.scale
      };
    },
    link() {
      console.log(this.tagName, this.href)

      let url = ''

      if (this.tagName === 'a') {
        url = this.href
      } else if (this.tagName === 'router-link') {
        url = this.route
      }

      return url
    },
    hasBefore() {
      return !!this.$slots['before']
    },
    hasContent() {
      return !!this.$slots['content']
    },
    hasAfter() {
      return !!this.$slots['after']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/core/index";
</style>
