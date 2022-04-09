<template>
  <div :class="cardClasses">
    <h3 class="pricing-card__heading">{{ title }}</h3>
    <div class="pricing-card__body">
      <h2>${{ price }}/mo</h2>
      <p>feature one</p>
      <p>feature two</p>
      <p>feature three</p>
      <CTAButton :label="buttonLabel" :buttonStyle="buttonStyle"/>
    </div>
  </div>
</template>

<script>
import CTAButton from './CTAButton.vue';
export default {
  name: 'PricingCard',
  components: { CTAButton },
  props: {
    buttonLabel: {
      default: 'Click Here',
      type: String,
    },
    buttonStyle: {
      default: 'primary',
      type: String,
    },
    highlightCard: {
      default: false,
      type: Boolean,
    },
    price: {
      default: 0,
      type: Number,
    },
    title: {
      default: 'Card Title',
      type: String,
    },
  },
  computed: {
    cardClasses() {
      let classes = 'pricing-card';

      if (this.highlightCard) {
        classes += ' pricing-card--highlighted'
      }

      return classes;
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pricing-card {
  border: $border__default;
  border-radius: 3px;

  &--highlighted {
    border-color: $color__blue;
  }

  &__body {
    padding: 1rem;
  }

  &__heading {
    border-bottom: $border__default;
  }
}

.pricing-card--highlighted {
  border-color: $color__blue;

  .pricing-card__heading {
    color: $color__white;
    background-color: $color__blue;
    border-color: $color__blue;
  }
}
</style>
