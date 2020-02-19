<script>
import VueTypes from "vue-types";
//import mixin from "./utils/mixin";
export default {
  //mixins: [mixin],
  name: "Skel",
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
    size: VueTypes.string,
    role: VueTypes.string,
    link: VueTypes.string
  }
};
</script>
