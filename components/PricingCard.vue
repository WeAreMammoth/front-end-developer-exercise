<template>
<div>
    <b-container class="cards">
      <b-card class="card"
        border-variant="secondary"
        header="Free"
        header-border-variant="secondary"
        align="center"
      >
        <!-- I had to hard code the data because I couldn't get vuex to work I'm so sorry -->
        <b-card-text class="price-one">$0/mo</b-card-text>
        <b-card-text class="dummy-data">2 GB storage</b-card-text>
        <b-card-text class="dummy-data">10 users included</b-card-text>
        <b-card-text class="dummy-data">Email support</b-card-text>
        <b-card-text class="dummy-data">Help center access</b-card-text>
        <button class="button">Sign Up For Free</button>
      </b-card>
    </b-container>
   
    
</div>

</template>

<script>

export default {
  name: 'PricingCard',
  props: {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>

.price-one {
  font-size: 30px;
}

.card {
  border-style: solid;
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

    .price-one {
      color: black;
    }
}

.button {
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border-color: #007bff;
  background-color: white;
  color: #007bff;
  border-style: solid;
}

.cards {
  width: 350px;
  justify-content: center;
  margin-top: 30px;
  
}

.card-header {
  font-size: 30px;
}

</style>
