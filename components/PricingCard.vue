<template>
  <div class="price-card-wrap">
    <div class="price-card" :optionName="option.name" v-for="option in getOptions" :key="index">
      <h4 class="price-card__title">{{ option.name }}</h4>
      <div class="price-card__content">
        <h4 class="price-card__content__monthly">${{ option.cost }}/mo</h4>
        <ul class="price-card__content__list">
          <li v-for="value in option.features">{{ value }}</li>
        </ul>
        <b-button 
          v-b-modal.optionModal
          @click="selectPlan()"
          :data-option="option.name" 
          :variant="option.buttonVariant" >
          {{ option.cta }}
        </b-button>
      </div>
    </div>
    <Modal :chosenPlan="chosenPlan" />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "PricingCard",
  data: function () {
    return {
      chosenPlan: "",
    };
  },
  props: [
    'chosenPlan'
  ],
  components: {
    Modal,
  },
  computed: {
    getOptions() {
      return this.$store.getters.pricingOptions;
    },
  },
  methods: {
    selectPlan() {
      this.chosenPlan = window.event.target.dataset.option;
    },
  },
};
</script>

<style lang="scss" scoped>
$bs-blue: #007bff;
@mixin bp-large {
  @media all and (min-width: 992px) {
    @content;
  }
}
@mixin flexy
(
  $dir: null,
  $just: null,
  $items: null,
  $self: null,
  $flow: null,
  $wrap: null
) 
{
  display: flex;
  flex-direction: $dir;
  justify-content: $just;
  align-items: $items;
  align-self: $self;
  flex-flow: $flow;
  flex-wrap: $wrap;
}

.price-card-wrap {
  @include flexy($dir: column, $just: center, $items: center);
  width: 100%;
  @include bp-large {
    flex-direction: row;
  }
}
  .price-card {
    @include flexy($dir: column, $just: center, $items: center);
    text-align: center;
    border-radius: 6px;
    border: 2px solid rgba(black, .1);
    flex: 1;
    width: 100%;
    &:not(:first-of-type) {
      margin-top: 1.33rem;
      @include bp-large {
        margin-top: 0;
        margin-left: 1.33rem;
      }
    }
    &__title {
      padding: .66rem 1.33rem;
      background-color: rgba(black, .05);
      width: 100%;
      border-bottom: 2px solid rgba(black, .1);
    }
    &__content {
      padding: 1.33rem .66rem;
      &__list {
        padding: .66rem 0;
        li {
          list-style: none;
        }
      }
    }
  }
  .price-card[optionName="Enterprise"] {
    border-color: $bs-blue;
    .price-card__title {
      background-color: $bs-blue;
      color: white;
    } 
  }
</style>