<template>
   <b-card class="card-custom mr-4 mb-4" no-body :class="{'border-primary': userSelectedPlan === name}">
   <b-card-header :class="{'bg-primary': userSelectedPlan === name}">
     <h4 class="site-title-dark font-weight-bold">{{ name }} </h4>
   </b-card-header>
 
   <b-card-body >
       <b-card-title>
     {{`$${cost}/mo`}}
   </b-card-title>
    <div class="mb-3">
      <b-card-text v-for="(feature, idx) in features" :key="idx" class="mb-0">{{feature}}</b-card-text>
   </div>
   <b-button href="#" variant="primary" @click="choosePlan(name)">{{ cta }}</b-button>
   </b-card-body>
 
  
   
 </b-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'PricingCard',

  props: {
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    features: {
      type: Array,
      required: true
    },
    cta: {
      type: String,
      required: true,
    },
    paid: {
      type: Boolean,
      required: true,
    }
  },
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userSelectedPlan'
    ]),
  },
  methods: {
    choosePlan(name){
      this.$emit('choose-plan', name);
    }
  },

};
</script>
<style scoped lang="scss">
.card-custom {
  min-width: 250px;
  width: 280px;
}
</style>