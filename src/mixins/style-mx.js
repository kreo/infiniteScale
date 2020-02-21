export const styleMx = {
  computed: {
    classes() {
      return Object.assign(this.baseClasses, this.extraClasses);
    },
    toolsClasses() {
      return {};
    }
  }
};
