<template>
  <base-cmp
    :tagName="tagName"
    :role="role"
    :class="['button', classes]"
    :href="link"
    :to="route"
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

  </base-cmp>
</template>

<script>
  import VueTypes from 'vue-types'
  import BaseCmp from './base-cmp'

  export default {
    name: 'ButtonCmp',
    extends: BaseCmp,
    components: {},
    data () {
      return {}
    },
    props: {
      tagName: VueTypes.string.def('button'),
      hasText: VueTypes.bool.def(true),
      text: VueTypes.string.def('Button inherit'),
      role: VueTypes.string.def('button'),
    },
    computed: {
      classes () {
        return {
          [this.scalableClasses]: this.scalable,
          [this.scaleClasses]: this.scale
        }
      },
      link () {
        return this.tagName === 'a' ? this.href : null
      },
      route () {
        return this.tagName === 'router-link' ? this.to : null
      },
      hasBefore () {
        return !!this.$slots['before']
      },
      hasContent () {
        return !!this.$slots['content']
      },
      hasAfter () {
        return !!this.$slots['after']
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../shared/core/index";
</style>
