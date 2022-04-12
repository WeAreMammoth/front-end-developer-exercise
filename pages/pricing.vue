<template>
<div>
  <b-container class="text-center">
       <b-modal
      ref="confirmation-modal"
      title="New Plan Selected"
      title-class="font-weight-bold"
    > 
      <p>You have chosen: <span class="font-weight-bold">{{ chosenPlan }}</span></p>
    </b-modal>
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-5">
      <b-col md="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
  </b-container>
  <b-row class="justify-content-center"> 
    <b-col 
      lg="4"
      v-for="(option, index) in pricingOptions" 
      :key="index"
    >
    <PricingCard 
      :buttonLabel="option.cta"
      :button="getButton(option.paid)"
      :features="option.features"
      :cost="option.cost"
      :title="option.name"
      :isSelected="isOptionSelected(option.name)"
      :onButtonClick="setChosenPlan"
    />
    </b-col>
  </b-row>
  </div>
</template>

<script>
import PricingCard from '../components/PricingCard.vue';
export default {
    components: {
    PricingCard
  },
  name: "Pricing",
  layout: "default",
  computed: {
    pricingOptions() {
      return this.$store.getters.pricingOptions;
    },

    chosenPlan() {
      return this.$store.state.chosenPlan;
    },
  },
    watch: {
      chosenPlan() {
        this.$refs['confirmation-modal'].show();
      },
    },
  

  methods: {
    setChosenPlan(planName) {
      this.$store.commit('setChosenPlan', {chosenPlan: planName});
    },

    getButton(isPaidOption) {
      return isPaidOption ? 'primary' : 'outline-primary';
    },

    isOptionSelected(optionName) {
      return optionName === this.$store.state.chosenPlan
    },
  }
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>
