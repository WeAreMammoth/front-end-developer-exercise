<template>
  <div class='pricingCard'>
    <div class='pricingCard-title'>
      <h3 class='pricingCard-title_text'>{{ title }}</h3>
    </div>
    <div class='pricingCard-info'>
      <h4 class='pricingCard-info_price'>${{ price }}/mo</h4>
      
      <p class='pricingCard-description_item' v-for="item in description" :key="item">
        {{ item }}
      </p>

      <button v-if="isFree" class='pricingCard-button isFree' >{{ ctaText }}</button>
      <button v-else class='pricingCard-button' >{{ ctaText }}</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'PricingCard',
    props: {
      title: String,
      price: Number,
      description: Array,
      ctaText: String,
      isFree: Boolean
    },
    computed: {},
    methods: {},
  };
</script>

<style lang="scss" scoped>
@import '../pages/global';

  .pricingCard {
    text-align: center;
    border: $darkgray 1px solid;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
   
    @media (min-width: $breakpoint-desktop) {
      width: calc(33% - 5px);
      margin: 10px;

    }

    &-title {
      padding: 10px 10px 0;
      font-weight: 500;
      background-color: lightgrey;
      border-bottom: $darkgray 1px solid;
    }

    &-info {
      padding: 20px 10px;

      &-price {
        font-weight: 500;
      }
    }

    &-description {
      &_item {
        margin: 0;
      }
    }

    &-button {
      background-color: $blue;
      color: white;
      border: 1px $blue solid;
      border-radius: 5px;
      padding: 10px 15px;
      margin-top: 15px;

      &.isFree {
        background-color: white;
        color: $blue;
      }
    }
  }


</style>