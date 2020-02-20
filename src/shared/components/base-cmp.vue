<script>

import VueTypes from "vue-types";
import { styleMx } from '../mixins/style-mx'

export default {
  mixins: [ styleMx ],
  name: "BaseCmp",
  render: function(createElement) {
    return createElement(
      this.tagName,
      { class: this.toolsClasses },
      this.$slots.default
    );
  },
  data() {
    return {
      scalableClasses: [`is-scalable`],
      scaleClasses: [`scale--${this.scale}`]
    };
  },
  props: {
    tagName: VueTypes.string.def("div"),
    scalable: VueTypes.bool.def(true),
    scale: VueTypes.string,
    role: VueTypes.string,
    to: VueTypes.object,
    text: VueTypes.string
  },
  computed: {
    baseClasses () {
      return {
        [this.$options.name]: true,
        [this.scalableClasses]: this.scalable,
        [this.scaleClasses]: this.scale
      }
    },
  }
};
</script>
