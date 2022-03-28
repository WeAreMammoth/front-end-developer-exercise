<template>


  <b-container>
    <b-row>
     
        <b-card-group class="col"
                      deck
                      v-for="(n, index) in itemsToDisplay"
                      :key="index"
                      :data-plan-name="n.name">


          <b-card :title="'$' + n.cost + '/mo'" header-tag="header" header=data-plan-name class="text-center">
            <template #header>
              <h3 class="mb-0">{{ n.name }}</h3>
            </template>
            <b-card-text>


              <li v-for="(nx, index) in n.features" :key="index">{{ nx }}</li>

            </b-card-text>
            <b-button class="button" data-target="modal-1" v-b-modal.modal-1 :data-option="n.name" data-plan="n.name" variant="primary" @click="getSelectedPlan()">{{ n.cta }} </b-button>
          </b-card>

          <!--<b-card border-variant="primary"
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            class="text-center">
      <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>-->
        </b-card-group>

      <PriceModal :selectedPlanName="selectedPlan" />

    </b-row>
  </b-container>


</template>

<script>
  import { PriceModal } from "../components/PriceModal";

export default {
  name: 'PricingCard',
    props: ['planName'],
    data: function () {
      return {
        selectedPlan: ""
      };
    },

    mounted() {
      
    },

    computed: {
      itemsToDisplay() {
        return this.$store.getters.pricingOptions;
       
        
      },

      components: {
        PriceModal,
      }
    },
    methods: {
      getSelectedPlan() {

        this.selectedPlan = window.event.target.dataset.option;
        console.log(window.event.target.dataset.option);
      }
    },
}
</script>


<style lang="scss" scoped>
  li {
    list-style-type: none;
  }

  .card {
    color: black;
  }

  .card-deck {
    background-color: none;
  }

  .card-deck[data-plan-name="Free"] {
    .button {
      border-color: #007BFF;
      background: none;
      color: #007BFF;
    }
  }

  .card-deck[data-plan-name="Pro"] {

  }

  .card-deck[data-plan-name="Enterprise"] {
    .card {
      border-color: #007bff;
    }

    .card-header {
      background-color: #007bff;
      color: white;
    }
  }

</style>
