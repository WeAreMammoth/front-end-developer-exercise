<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8">
        <p class='pricing-description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>

    <b-row>
      <div class='pricingCards'>
        <PricingCard v-for="item in getPricingOptions" :key="item" :title="item.name" :price="item.cost" :description="item.features" :ctaText="item.cta" :isPaid="item.paid === true"/>
        
      </div>
    </b-row>
  </b-container>
</template>

<script>
import store from '../store';

export default {
  name: 'Pricing',
  layout: 'default',
  store,
  computed:{
    getPricingOptions(){ return this.$store.getters.pricingOptions }
  }
};
</script>

<style lang="scss" scoped>
@import 'global';

p {
  font-size: 1.25rem;
}

.pricingCards {
  display: block;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: $breakpoint-desktop) {
    display: flex;
  }
}

</style>
