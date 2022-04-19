<template>
  <div
    class="pricingCard"
    :class="{
      'pricingCard--featured': featured,
    }"
  >
    <div class="pricingCard__container">
      <h3 class="pricingCard__name">{{ name }}</h3>
      <div class="pricingCard__content">
        <div class="pricingCard__cost">${{ cost }}/mo</div>
        <ul class="pricingCard__features-list">
          <li
            class="pricingCard_feature"
            v-for="feature in features"
            :key="feature"
          >
            {{ feature }}
          </li>
        </ul>
        <b-button
          :variant="paid ? 'primary' : 'outline-primary'"
          @click="select"
          >{{ cta }}</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingCard",
  props: {
    name: String,
    cost: Number,
    features: Array,
    cta: String,
    paid: Boolean,
    featured: Boolean,
  },
  computed: {},
  methods: {
    select() {
      this.$emit("select");
    },
  },
};
</script>
