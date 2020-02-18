<script>
import VueTypes from "vue-types";
//import mixin from "./utils/mixin";
export default {
  //mixins: [mixin],
  render: function(createElement) {
    return createElement(
      this.tagName,
      {
        class: this.utilityClasses
      },
      this.$slots.default
    );
  },
  data() {
    return {
      scalableClasses: [`is-scalable`],
      sizeClasses: [`fh-scale--${this.size}`]
    };
  },
  props: {
    tagName: VueTypes.string.def("div"),
    scalable: VueTypes.bool.def(true),
    size: VueTypes.string
  }
  /*
  computed: {
    classes() {
      return {
        [this.scalableClasses]: this.scalable,
        [this.sizeClasses]: this.size
      };
    }
  }
  */
};
</script>