<template>
  <base-cmp :tagName="tagName" :class="['media', classes]">
    <slot></slot>
  </base-cmp>
</template>

<script>
  import VueTypes from 'vue-types'
  import BaseCmp from './base-cmp'

  export default {
    name: 'MediaCmp',
    extends: BaseCmp,
    components: {},
    data () {
      return {}
    },
    props: {
      tagName: VueTypes.string.def('i')
    },
    computed: {
      classes () {
        return {
          [this.scalableClasses]: this.scalable,
          [this.scaleClasses]: this.scale
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../shared/core/index";
</style>
