export default {
  props: ["btnCount"],
  data() {
    return {};
  },
  methods: {
    plusCount() {
      this.btnCount++;
      this.$emit("btnChanged", this.btnCount);
    }
  }
};
