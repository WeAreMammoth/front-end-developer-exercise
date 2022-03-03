<template>
  <div>
    <h4>Welcome to our website</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia
      exercitationem autem eveniet neque eos placeat porro tempora, sit suscipit
      sint labore laudantium inventore iste maxime dolorem quas, minus ducimus?
    </p>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  layout: "default",
};
</script>

<style lang='scss'>
@import 'global';

.pricing {
  &-description {
    color: $darkgray;
  }
}

.pricingCard {
  &:hover {
    border-color: $blue;
    cursor: pointer;
    
    .pricingCard_header {
      background-color: $blue;   
      color: white;
    }
  }

  &_header {
    background-color: $lightgray;

    &.isChosenPlan {
      background-color: $blue;
      color: white;
    }
  }

  &_button {
    background-color: white;
      color: $blue;

    &.isPaid {
      color: white;
      background-color: $blue;
    }
  }
}

.darkMode {
  p {
    color: $lightgray;
  }

  .pricingCard {
    &_header {
      background-color: gray;
    }

    &_button {
      color: white;

       &.isPaid {
        background-color: transparent;
        color: $blue;
      }
    }
  }
}


</style>