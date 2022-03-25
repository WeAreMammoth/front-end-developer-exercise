<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-4">
      <b-col md="7" lg="4" v-for="pricing in pricingOptions" :key="pricing.name">
        <PricingCard :pricing="pricing"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PricingCard from '../components/PricingCard.vue'

export default {
  name: 'Pricing',
  layout: 'default',
  computed: {},
  components: {
    PricingCard
  },
  data() {
    return {
      pricingOptions: []
    }
  },
  created() {
    this.pricingOptions = [
      {
        name: 'Free',
        cost: 0,
        features: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        cta: 'Sign up for free',
        paid: false,
      },
      {
        name: 'Pro',
        cost: 15,
        features: [
          '20 users included',
          '10 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        cta: 'Get started',
        paid: true,
      },
      {
        name: 'Enterprise',
        cost: 29,
        features: [
          '30 users included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        cta: 'Contact us',
        paid: true,
      },
    ]
  }
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>
