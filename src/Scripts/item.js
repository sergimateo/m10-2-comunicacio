import ButtonCounter from "@/components/ButtonCounter.vue";

export default {
  components: {
    ButtonCounter: ButtonCounter
  },
  props: ["title", "btnItemCount"],
  data() {
    return {
      cnt: "0"
    };
  },
  methods: {
    plusCount() {
      this.btnItemCount++;
      this.$emit("btnItemChanged", this.btnItemCount);
    }
  }
};
