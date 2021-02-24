import ButtonCounter from "@/components/ButtonCounter.vue";

export default {
  components: {
    ButtonCounter: ButtonCounter
  },
  props: ["title"],
  data() {
    return {
      cnt: "0"
    };
  }
};
