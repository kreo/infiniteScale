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
        return {
          'text': true
        }
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
