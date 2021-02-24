import Item from "@/components/Item.vue";
export default {
  components: {
    Item: Item
  },
  data() {
    return {
      cntItem: "0",
      items: [
        {
          id: "1",
          title: "In Vue"
        },
        {
          id: "2",
          title: "We"
        },
        {
          id: "3",
          title: "Trust"
        }
      ]
    };
  }
};
