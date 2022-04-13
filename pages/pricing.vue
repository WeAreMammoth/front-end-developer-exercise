<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1 class="site-title">Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8">
        <p class="paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <div class="d-flex flex-column flex-md-row">
      <PricingCard v-for="card in pricingOptions" :key="card.name" 
        :cost="card.cost"
        :name="card.name"
        :features="card.features"
        :cta="card.cta"
        :paid="card.paid"
        @choose-plan="choosePlan"
        />
      </div>
    </b-row>
    <ModalComponent 
    :id="'pricing-modal'"
    :title="'New Plan Selected'"
     >
     <h6>You have chosen: <span class="font-weight-bold">{{userSelectedPlan}}</span></h6>
     </ModalComponent>
  </b-container>
</template>

<script>
import PricingCard from '@/components/PricingCard'
import ModalComponent from '@/components/ModalComponent'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Pricing',
  components: {PricingCard, ModalComponent},
  layout: 'default',
  computed: {
    ...mapGetters([
      'pricingOptions',
      'userSelectedPlan'
    ])
  },
  methods: {
    choosePlan(name){
      this.$store.dispatch('choosePricingPlan', name);
      this.$bvModal.show('pricing-modal');
    }
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>
