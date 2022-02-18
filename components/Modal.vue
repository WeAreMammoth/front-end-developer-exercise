<template>
  <b-modal
    id="modal-prevent-closing"
    ref="modal"
    title="New Plan Selected"
    @ok="updateChosenPlan"
  >
    You have chosen: <b>{{ msg2 }}</b>
  </b-modal>
</template>

<script>

export default {
  name: "Modal",
  props: [
    'msg2'
  ],
  data: function () {
    return {
      activePlan: this.msg2,
    };
  },
  
  methods: {
    updateChosenPlan() {
      
      this.$store.commit("updateChosenPlan", this.msg2);
      
    },
    
  },
};
</script>

<style>
</style>