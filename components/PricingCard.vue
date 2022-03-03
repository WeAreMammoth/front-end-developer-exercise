<template>
  <div class='pricingCard' @click="openModal" tabindex="0" role="button">

    <div v-if="isSelected"  class='pricingCard_header isSelected'>
      <h3 class='pricingCard_header-text isSelected'>{{ title }}</h3>
    </div>

    <div v-else class='pricingCard_header'>
      <h3 class='pricingCard_header-text'>{{ title }}</h3>
    </div>

    <div class='pricingCard_info'>
      <h4 class='pricingCard_info-price'>${{ price }}/mo</h4>
      
      <p class='pricingCard_description-item' v-for="item in description" :key="item">
        {{ item }}
      </p>

      <button v-if="isPaid" class='pricingCard_button isPaid' >{{ ctaText }}</button>
      <button v-else class='pricingCard_button' >{{ ctaText }}</button>

    </div>
    <Modal v-show="showModal" @close="closeModal"/>
  </div>
</template>

<script>
import Modal from '../components/Modal';
import store from '../store';

  export default {
    name: 'PricingCard',
    store,
    components: {
      Modal
    },
    props: {
      title: String,
      price: Number,
      description: Array,
      ctaText: String,
      isPaid: Boolean,
      isSelected: Boolean
    },
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      openModal() {
        // before opening modal, set the plan chosen by the user in store
        this.$store.commit('setPlan', this.$props.title)
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    },
  };
</script>

<style lang="scss" scoped>
@import '../pages/global';

  .pricingCard {
    text-align: center;
    border: $border-gray 1px solid;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
   
    @media (min-width: $breakpoint-desktop) {
      width: calc(33% - 5px);
      margin: 10px;
    }

    &_header {
      padding: 10px 10px 0;
      font-weight: 500;
      border-bottom: $border-gray 1px solid;
    }

    &_info {
      padding: 20px 10px;

      &-price {
        font-weight: 500;
        margin-bottom: 15px;
      }
    }

    &_description {
      &-item {
        margin: 0;
      }
    }

    &_button {
      border: 1px $blue solid;
      border-radius: 5px;
      padding: 10px 15px;
      margin-top: 15px;
    }
  }


</style>