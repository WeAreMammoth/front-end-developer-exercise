<template>
  <b-container class="text-center">
    <b-modal ref="confirmation-modal"> 
      <p>current plan: {{ chosenPlan }}</p>
    </b-modal>
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-4">
      <b-col md="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mb-4">
      <b-col lg="4" v-for="(option, index) in pricingOptions" v-bind:key="index">
        <PricingCard 
          :buttonLabel="option.cta"
          :buttonVariant="option.paid ? 'primary' : 'outline-primary'"
          :features="option.features"
          :cost="option.cost"
          :title="option.name"
          :featured="option.featured"
          :onButtonClick="setChosenPlan"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PricingCard from '../components/PricingCard.vue';
export default {
  components: { PricingCard },
  name: 'Pricing',
  layout: 'default',
  computed: {
    pricingOptions() {
      return this.$store.getters.pricingOptions;
    },
    chosenPlan() {
      return this.$store.state.chosenPlan;
    }
  },
  watch: {
    chosenPlan() {
      this.$refs['confirmation-modal'].show();
    }
  },
  methods: {
    setChosenPlan(planName) {
      this.$store.commit('setChosenPlan', { chosenPlan: planName });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: $color__gray;
  font-size: 1.25rem;
}
</style>
