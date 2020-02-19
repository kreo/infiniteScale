<template>
  <Skel
    :tagName="tagName"
    :role="role"
    :class="['button', classes]"
    :href="link"
  >

    <Icon v-if="hasIconBefore" scale="xs" />
    <span v-if="hasText" class="text">{{ text }}</span>
    <Icon v-if="hasIconAfter" scale="md" />

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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../shared/core/index";
</style>
