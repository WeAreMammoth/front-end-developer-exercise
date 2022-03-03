<template>
  <b-col class="mb-5">
    <b-card :header-text-variant="getTextColor(option.name)" :header-bg-variant="getVariant(option.name)" :border-variant="getVariant(option.name)" header-tag="header">
      <template #header>
        <h4 class="mb-0">{{ option.name }}</h4>
      </template>
      <b-card-title>${{ option.cost }}/mo</b-card-title>
      <b-card-text>
        <ul class="features">
          <li v-for="feature in option.features" :key="feature">{{ feature }}</li>
        </ul>
      </b-card-text>
      <b-button @click="updatePlan(option.name)" :variant="getButtonVariant(option.name)">{{ option.cta }}</b-button>
    </b-card>
  </b-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PricingCard',
  props: {
    option: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {},
  methods: {
    ...mapMutations([
      'updateChosenPlan' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    updatePlan(name) {
      this.updateChosenPlan(name);
      this.$bvModal.show('site-modal');
    },
    getVariant(name) {
      return ( name === 'Enterprise') ? 'primary' : '';
    },
    getTextColor(name) {
      return ( name === 'Enterprise' ) ? 'white' : '';
    },
    getButtonVariant(name) {
      return ( name === 'Free' ) ? 'outline-primary' : 'primary';
    }
  },
};
</script>

<style lang="scss" scoped>
.features {
  padding: 0;
  list-style: none;
}
</style>