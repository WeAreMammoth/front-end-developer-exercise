<template>
  <b-modal id="optionModal" ref="modal" title="New Plan Selected" @ok="chooseOption">
    You have chosen: <span class="bold">{{ chosenPlan }}</span>
  </b-modal>
</template>

<script>
export default {
  name: "Modal",
  props: [
    'chosenPlan'
  ],
  data: function () {
    return {
      selectedOption: this.chosenPlan,
    };
  },
  methods: {
    chooseOption() {
      this.$store.commit("chooseOption", this.chosenPlan);
    },
  },
};
</script>
<style scoped>
.bold {
  font-weight: bold;
}
</style>