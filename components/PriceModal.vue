<template>
  <div>

    <b-modal id="modal-1" title="View Selected Plan" @ok="chooseOption">
      <p class="my-4">The {{ selectedPlanName }} plan has been selected.</p>
    </b-modal>
  </div>
</template>

<script>

  export default {
  name: "PriceModal",
  props: [
    'selectedPlanName'
  ],
  data: function () {
    return {
      planChosen: this.selectedPlanName,
    };
  },
  methods: {
    chooseOption() {
      this.$store.commit("chooseOption", this.selectedPlanName);
    },
  },
};
</script>
