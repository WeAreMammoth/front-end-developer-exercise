<template>
  <b-card
    :border-variant="cardBorderVariant"
    :header="title"
    :header-bg-variant="cardHeaderBGVariant"
    :header-text-variant="cardHeaderTextVariant"
    :title="`$${cost}/mo`"
    header-tag="h3"
    header-class="mb-0"
    title-tag="h3"
    class="mb-4"
  >
    <b-card-body>
      <ul class="list-unstyled">
        <li 
          v-for="(feature, index) in features" 
          :key="index">
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
export default {
  name: 'PricingCard',
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
    isSelected: {
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
    onButtonClick: {
      default: () => {},
      type: Function,
    }
  },
  computed: {
    cardBorderVariant() {
      return this.isSelected ? 'primary' : '';
    },
    cardHeaderBGVariant() {
      return this.isSelected ? 'primary' : '';
    },
    cardHeaderTextVariant() {
      return this.isSelected ? 'white' : '';
    }
  },
  methods: {
    handleButtonClick() {
      this.onButtonClick(this.title);
    }
  },
};
</script>
