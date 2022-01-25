<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1 class="header">Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      
      </b-col>
     
    </b-row>
     <b-container class="cards">
       <b-card-group deck>
       <b-row>
         <!-- these should be a v-for loop rather than three seperate components but I don't know how to drill down to the data in vuex -->
            <PricingCard />
            <PricingCardTwo />
            <PricingCardThree />
       </b-row>
       </b-card-group>
     </b-container>
  </b-container>
</template>

<script>

import PricingCard from "../components/PricingCard.vue";
import PricingCardTwo from "../components/PricingCardTwo.vue";
import PricingCardThree from "../components/PricingCardThree.vue"

export default {
  name: "Pricing",
  layout: "default",
  components: {
    PricingCard,
    PricingCardTwo,
    PricingCardThree,
  },
  computed: {},
};
</script>



<style lang="scss" scoped>

p {
  color: #6c757d;
  font-size: 1.25rem;
}

.cards {
  justify-content: center;
  margin-bottom: 40px;
  
}

.text-center {
  text-align: center;
}

.card-deck {
  justify-content: center;
}

@media screen and (max-width: 990px) {
  .row {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    
  }

  .header {
    align-content: center;
    justify-content: center;
  }
  
}

@media screen and (max-width: 1200px) {
  .row {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    
  }

  .header {
    align-content: center;
    justify-content: center;
  }
  
}
</style>
