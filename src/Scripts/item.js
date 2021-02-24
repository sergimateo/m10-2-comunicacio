import ButtonCounter from "@/components/ButtonCounter.vue";

export default {
  components: {
    ButtonCounter: ButtonCounter
  },
  props: ["title", "btnCount"],
  data() {
    return {
      cnt: "0"
    };
  },
  methods: {
    plusCount() {
      this.btnCount++;
      this.$emit("btnChanged", this.btnCount);
    }
  }
};
