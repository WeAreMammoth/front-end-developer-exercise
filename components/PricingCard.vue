<template>
  <div>
    <div :class="[pricing.cost >= 29 ? 'pricing_card--blue' : '' ,'pricing_card']">
      <header :class="[pricing.cost >= 29 ? 'pricing_card__header--blue' : '' ,'pricing_card__header']">
        {{pricing.name}}
      </header>

      <section class="pricing_card__cost">
        {{`$${pricing.cost}/mo`}}
      </section>

      <section class="pricing_card__features">
        <p v-for="(feature, index) in pricing.features" :key="`feature-${index}`">{{feature}}</p>
      </section>

      <footer class="pricing_card__footer">
        <b-button class="pricing_card__button"
          :variant="pricing.paid ? 'primary' : 'outline-primary'"
          @click="showModal"
          aria-label="Show modal">
          {{pricing.cta}}
        </b-button>
      </footer>
    </div>
    <PricingModal :pricing="pricing"
      :show="isModalVisible"
      @close="closeModal"
    />
  </div>
</template>

<script>
import PricingModal from './PricingModal.vue'

export default {
  name: 'PricingCard',
  components: {
    PricingModal
  },
  props: {
    pricing: Object
  },
  computed: {},
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.pricing_card {
  margin: 1rem 0;
  border: 1px solid $grey;
  border-radius: .5rem;
  &--blue {
    border-color: $blue;
  }
  &__header {
    font-size: 1.8rem;
    font-weight: 600;
    padding: .5rem;
    background-color: lighten($grey, 15);
    border-radius: .5rem .5rem 0 0;
    border-bottom: 1px solid $grey;
    &--blue {
      background-color: $blue;
      color: $white;
      border-bottom-color: $blue;
    }
  }
  &__cost {
    padding: .8rem;
    font-size: 2rem;
    font-weight: bold;
  }
  &__features {
    p {
      margin: 0;
    }
  }
  &__footer {
    padding: 1rem;
  }
}

.dark_theme {
  .pricing_card {
    background-color: lighten($black, 25);
    border-color: lighten($black, 40);
    &--blue {
      border-color: $blue;
    }
    &__header {
      background-color: lighten($black, 20);
      border-bottom: 1px solid lighten($black, 40);
      &--blue {
        background-color: $blue;
        color: $white;
        border-bottom-color: $blue;
      }
    }
  }
}
</style>
