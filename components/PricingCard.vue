<template>
  <div :class="['card', planInfo.featured && 'border-primary']">

    <div :class="['card-header', planInfo.featured && 'bg-primary text-white']">
      <h4 class="m-0">{{planInfo.name}}</h4>
    </div>

    <div class="card-body">
      <p class="mb-3 h4">${{planInfo.cost}}/mo</p>
      <p class="m-0">
        <template v-for="feature in planInfo.features">
          {{feature}}<br/>
        </template> 
      </p>      
      <button type="button" :class="['mt-4 btn', planInfo.paid ? 'btn-primary' : 'btn-outline-primary']" @click="choosePlan()">
        {{planInfo.cta}}
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: { planInfo: Object },
  computed: {},
  methods: {
    choosePlan() {
      this.$store.commit('choosePlan', this.planInfo);
      this.$bvModal.show('chosenPlan');
    }
  }
};
</script>

<style lang="scss" scoped>
  [data-theme="dark"] {
    .card {
      background-color: $dark;
    }
  }
</style>
