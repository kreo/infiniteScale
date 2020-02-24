<template>
  <base-cmp
    :tagName="tagName"
    :class="[classes]"
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
        return {
          'media': true
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
