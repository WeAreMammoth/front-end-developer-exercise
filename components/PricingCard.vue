<template>
  <b-card
    :border-variant="cardBorderVariant"
    :header="title"
    :header-bg-variant="cardHeaderBGVariant"
    :title="`$${cost}/mo`"
    title-tag="h2"
  >
    <b-card-body>
      <ul class="pricing-card__features">
        <li v-for="(feature, index) in features" v-bind:key="index">
          {{ feature }}
        </li>
      </ul>
    </b-card-body>
    <b-button :variant="buttonVariant">{{ buttonLabel }}</b-button>
  </b-card>
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
    buttonVariant: {
      default: 'primary',
      type: String,
    },
    features: {
      defualt: [],
      type: Array,
    },
    featured: {
      default: false,
      type: Boolean,
    },
    cost: {
      default: 0,
      type: Number,
    },
    title: {
      default: 'Card Title',
      type: String,
    },
    cardVariant: {
      default: '',
      type: String
    },
  },
  computed: {
    cardBorderVariant() {
      return this.featured ? 'primary' : '';
    },
    cardHeaderBGVariant() {
      return this.featured ? 'primary' : '';
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pricing-card__features {
  list-style: none;
  padding-left: 0;
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
