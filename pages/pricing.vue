<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="10" lg="8">
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col class="mt-5" sm="10" lg="4" v-for="(option, index) in pricingOptions" :key="option.name">
        <PricingCard :planInfo=option />
      </b-col>
    </b-row>

    <b-modal id="chosenPlan" title="New Plan Selected">
      <p>You have chosen: <strong>{{chosenPlanName}}</strong></p>
    </b-modal>

  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PricingCard from '../components/PricingCard.vue'

export default {
  name: 'Pricing',
  layout: 'default',
  components: { PricingCard },
  computed: {
    ...mapGetters([
      'pricingOptions',
      'chosenPlanName'
    ])
  },
};
</script>

<style lang="scss" scoped>
  .subtitle {
    color: #6c757d;
      font-size: 1.15rem;
  }

  @include media-breakpoint-up(sm) {
    .subtitle {
      font-size: 1.25rem;
    }
  }
</style>
