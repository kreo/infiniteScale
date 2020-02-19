<template>
  <base-cmp
    :tagName="tagName"
    :class="['card', classes]">

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
      classes () {
        return {
          [this.scalableClasses]: this.scalable,
          [this.scaleClasses]: this.scale
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
  @import "../shared/core/index";
</style>
