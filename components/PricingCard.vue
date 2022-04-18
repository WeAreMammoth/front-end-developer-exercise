<template >
 <b-card-group deck class="cardDiv">

    <b-card id="card"  v-for="(pricingItem, i) in pricingOptions" :key="i"
      v-bind:header="pricingItem.name"
      header-tag="header"
      v-bind:header-bg-variant="i == activeItem ? 'primary' : 'light'"
      v-bind:border-variant="i == activeItem ? 'primary' : 'light'"
      v-bind:header-text-variant="i == activeItem ? 'white' : 'black'"
      v-bind:title="'$'+ pricingItem.cost + '/month'"

    >
      <b-card-text v-for="feature in pricingItem.features" :key="feature">{{feature}}</b-card-text>
      <b-button href="" v-b-modal.modal-1 v-if="pricingItem.cta == 'Sign up for free'"
        variant="outline-primary"
        @click="selectItem(i)"
       >{{pricingItem.cta}}</b-button>
      <b-button href="" v-b-modal.modal-1 v-else variant="primary"
        @click="selectItem(i)"
        >{{pricingItem.cta}}</b-button>
    </b-card>
    <div>

      <b-modal id="modal-1" title="New Plan Selected">
        <p class="my-4">You have chosen: <strong>{{chosenPlan}}</strong></p>
      </b-modal>
    </div>
  </b-card-group>

</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: 'PricingCard',
  props: {},
  chosenPlan: null,
  computed: {
    ...mapGetters({
      pricingOptions: "pricingOptions",
      chosenPlan: "chosenPlan"
    }),

    ...mapState(['pricingOptions', 'chosenPlan']),

  },

    data() {
          return{ activeItem: ''
          }
  },

methods: {
     selectItem(i) {
           this.activeItem = i;
            this.ChosenPlan(this.pricingOptions[i].name);
        },
          ...mapMutations(
      ['ChosenPlan']
    ),
}};
</script>
<style lang="scss" scoped>
.cardDiv{
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
