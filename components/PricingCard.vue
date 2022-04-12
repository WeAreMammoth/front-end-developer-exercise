<template>
  <b-container class="mb-5">
    <b-card
    :border-variant="cardBorder"
    :header="title"
    :header-bg-variant="cardHeader"
    :header-text-variant="cardHeaderText"
    :title="`$${cost}/mo`"
    header-tag="h3"
    header-class="mb-0"
    title-tag="h3"
    class="text-center"
    
    >
     
      <b-card-text v-for="(feature, index) in features" :key="index">{{ feature }}</b-card-text>
      <b-button :variant="button" @click="handleButtonClick">{{buttonLabel }}</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
   buttonLabel: {
     default: 'Get started',
     type: String,
   },
   button: {
     default: 'primary',
     type: String,
   },
   features: {
     default: [],
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
     default: "Card Title",
     type: String,
   },
   onButtonClick: {
     default: () => {},
     type: Function,
   },
  },
  computed: {
    cardBorder() {
      return this.isSelected ? 'primary' : '';
    },

    cardHeader() {
      return this.isSelected ? 'primary' : '';
    },

    cardHeaderText() {
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
