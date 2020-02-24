<template>
  <base-cmp
    :tagName="tagName"
    :class="[classes]"
  >

    <template v-if="hasBefore">
      <header class="bar bar--top">
        <div class="belt">
          <slot name="before"></slot>
        </div>
      </header>
    </template>

    <template v-if="hasContent">
      <div class="content">
        <div class="belt">
          <slot name="content"></slot>
        </div>
      </div>
    </template>

    <template v-if="hasAfter">
      <footer class="bar bar--bottom">
        <div class="belt">
          <slot name="after"></slot>
        </div>
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

</style>
