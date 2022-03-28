<template>
  <div>
    <b-row class="align-items-center mb-4 justify-content-center">
      <b-col v-for="plan in pricingOptions" :key="plan.text" md="8" lg="4">
        <b-card
            :header="plan.name"
            header-tag="header"
            v-bind:header-text-variant="plan.name === 'Enterprise' ? 'white ': ''"
            v-bind:header-bg-variant="plan.name === 'Enterprise' ? 'primary ': ''"
            v-bind:border-variant="plan.name === 'Enterprise' ? 'primary ': ''"
          >
            <b-card-text>
              <h2 class="font-weight-bold"> ${{ plan.cost}}/mo </h2>
              <div>{{ plan.features[0] }}</div>
              <div>{{ plan.features[1] }}</div>
              <div>{{ plan.features[2] }}</div>
              <div>{{ plan.features[0] }}</div>
            </b-card-text>
            <b-button v-b-modal.modal-1 href="#" @click="updatePlan(plan.name)" v-bind:variant="plan.paid ? 'primary': 'outline-primary'">{{ plan.cta }}</b-button>
        </b-card>
      </b-col>
    </b-row>

    <b-modal id="modal-1" title="New Plan Chosen">
      <p class="my-4">You have chosen: {{this.$store.state.chosenPlan}}</p>
    </b-modal>
  </div>
</template>

<script>
import store from '../store/index';
import { mapMutations } from 'vuex';

export default {
  name: 'PricingCard',
  props: {},
  computed: {
    pricingOptions() {
      return this.$store.state.pricingOptions
    }
  },
  methods: {
    updatePlan(e) {
      this.$store.commit('changePlan', e)
    }
  }
};
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 993px) {
    .card {
      margin-bottom: 2em;
    }
  }

</style>
