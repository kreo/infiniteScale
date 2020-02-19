<script>
import VueTypes from "vue-types";
//import mixin from "./utils/mixin";
export default {
  //mixins: [mixin],
  name: "BaseCmp",
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
      scaleClasses: [`scale--${this.scale}`]
    };
  },
  props: {
    tagName: VueTypes.string.def("div"),
    scalable: VueTypes.bool.def(true),
    scale: VueTypes.string,
    role: VueTypes.string,
    href: VueTypes.string,
    to: VueTypes.object,
    route: VueTypes.string
  }
};
</script>
