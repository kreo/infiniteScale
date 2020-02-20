<template>
  <base-cmp
    :tagName="tagName"
    :class="[classes]"
  >

    <template v-if="hasBefore">
      <header class="header">
        <slot name="before"></slot>
      </header>
    </template>

    <template v-if="hasContent">
      <div class="content">
        <slot name="content"></slot>
      </div>
    </template>

    <template v-if="hasAfter">
      <footer class="footer">
        <slot name="after"></slot>
      </footer>
    </template>

  </base-cmp>
</template>

<script>
  import VueTypes from 'vue-types'
  import BaseCmp from './base-cmp'

  export default {
    name: 'CardCmp',
    extends: BaseCmp,
    components: {},
    data () {
      return {}
    },
    props: {
      tagName: VueTypes.string.def('article')
    },
    computed: {
      extraClasses () {
        return {
          'card': true
        }
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
  @import "../styles/core/";
</style>
