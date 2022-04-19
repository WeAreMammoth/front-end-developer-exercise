<template>
  <div>
    <b-container>
      <b-row class="my-5">
        <b-col>
          <h1>Company Inc.</h1>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="pricing">Pricing</NuxtLink>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Nuxt />
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      :visible="modalShow"
      title="New Plan Selected"
      @hide="clearSelectedPlan"
    >
      You have chosen: <b>{{ chosenPlan }}</b>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Default",
  computed: {
    pricingOptions() {
      return this.$store.state.pricingOptions;
    },
    modalShow() {
      return !!this.$store.state.chosenPlan;
    },
    chosenPlan() {
      return this.$store.state.chosenPlan;
    },
  },
  methods: {
    clearSelectedPlan() {
      this.$store.commit("choosePlan", null);
    },
  },
};
</script>

<style lang="css" scoped>
a.nuxt-link-exact-active {
  font-weight: bold;
}

@media (max-width: 991px) {
  h1 {
    font-size: 1.75rem;
  }
}
</style>
