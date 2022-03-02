<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1 class='pageTitle' >Company Inc.</h1>
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
</template>

<script>
import PricingCard from '../components/PricingCard.vue'

export default {
  name: 'Default',
}
</script>



<style lang="scss" scoped>
@import '../pages/global';

// on mobile breakpoint, reduce size of pageTitle from 2.5rem to 2rem
@media (max-width: $breakpoint-mobile) {
  .pageTitle {
    font-size: 2rem;
  }
}

// adding underline so there is more than one visual indicator for accessibility
a.nuxt-link-exact-active {
  font-weight: 700;
  text-decoration: underline;
}


</style>
