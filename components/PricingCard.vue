<template>
  <b-card
    :border-variant="cardBorderVariant"
    :header-tag="header"
    :header-bg-variant="cardHeaderBGVariant"
    :header-text-variant="cardHeaderTextVariant"
    :title="`$${cost}/mo`"
    title-tag="h3"
    class="pricing-card mb-4"
  >
    <template #header>
      <h3 class="mb-0">{{ title }}</h3>
    </template>
    <b-card-body>
      <ul class="pricing-card__features">
        <li v-for="(feature, index) in features" v-bind:key="index">
          {{ feature }}
        </li>
      </ul>
    </b-card-body>
    <b-button 
      :variant="buttonVariant"
      @click="handleButtonClick"
    >
      {{ buttonLabel }}
    </b-button>
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
      type: String,
    },
    onButtonClick: {
      default: () => {},
      type: Function,
    }
  },
  computed: {
    cardBorderVariant() {
      return this.featured ? 'primary' : '';
    },
    cardHeaderBGVariant() {
      return this.featured ? 'primary' : '';
    },
    cardHeaderTextVariant() {
      return this.featured ? 'white' : '';
    }
  },
  methods: {
    handleButtonClick() {
      this.onButtonClick(this.title);
    }
  },
};
</script>

<style lang="scss" scoped>
.pricing-card__features {
  list-style: none;
  padding-left: 0;
}
</style>
