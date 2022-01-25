<template>
  <div>
    <b-container class="cards">
      <b-card class="cardtwo"
        border-variant="secondary"
        header="Pro"
        header-border-variant="secondary"
        align="center"
      >
        <!-- I had to hard code the data because I couldn't get vuex to work I'm so sorry -->
         <b-card-text class="price-two">$15/mo</b-card-text>
        <b-card-text class="dummy-data">10 GB storage</b-card-text>
        <b-card-text class="dummy-data">20 users included</b-card-text>
        <b-card-text class="dummy-data">Priority Email support</b-card-text>
        <b-card-text class="dummy-data">Help center access</b-card-text>
        <button class="button-two">Get Started</button>
      </b-card>
    </b-container>
   
    
</div>
</template>

<script>
export default {
    name: 'PricingCardTwo',

}
</script>

<style lang="scss" scoped>

.price-two {
  font-size: 30px;
}

.card:hover {
  
  border-color: #007bff;

}

.button-two {
  width: 150px;
  height: 35px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border-style: none;
}

.cards {
  width: 350px;
  justify-content: center;
  margin-top: 30px;
  
}

.card-header {
  font-size: 30px;
}

.card:hover {
  color: white;
  border-color: #007bff;
    .card-header {
      background: #007bff;
    }
    .card-header::target-text {
      color: white;
    }
    .dummy-data {
      color: black;
    }

    .price-two {
      color: black;
    }
}

</style>