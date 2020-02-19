<template>
  <base-cmp
    :tagName="tagName"
    :class="['text', classes]"
  >
    <slot></slot>
  </base-cmp>
</template>

<script>
  import VueTypes from 'vue-types'
  import BaseCmp from './base-cmp'

  export default {
    name: 'TextCmp',
    extends: BaseCmp,
    components: {},
    data () {
      return {}
    },
    props: {
      tagName: VueTypes.string.def('span')
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

  .content {
    content: "";
  }
</style>
