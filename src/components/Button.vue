<template>
  <div class="Button" fh-component>
    <button :fh-scale="scale">
      <span class="text">Button</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    scale: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/core/index";

.Button {
  content: "";
}
</style>