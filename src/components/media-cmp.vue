<template>
  <base-cmp
    :tagName="tagName"
    :class="['media', classes]"
  >
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
      extraClasses () {
        return {}
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../shared/core/index";
</style>
