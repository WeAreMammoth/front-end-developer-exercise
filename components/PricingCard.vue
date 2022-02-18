<template>
  <b-row class="justify-content-center justify-content-lg-between">
    <b-card-group
      deck
      class="col-12 col-lg-4 mb-3"
      style="max-width: 450px"
      v-for="(n, index) in getPlanData"
      :key="index"
      :data-plan-name="n.name"
    >
      <b-card :title="'$' + n.cost + '/mo'" header-tag="header">
        <template #header>
          <h6 class="mb-0">{{ n.name }}</h6>
        </template>
        <ul class="feature-list">
          <li v-for="(nn, index) in n.features" :key="index">{{ nn }}</li>
        </ul>

        <b-button
          v-b-modal.modal-prevent-closing
          :variant="n.variant"
          :data-plan="n.name"
          @click="clickPlan()"
        >
          {{ n.cta }}</b-button
        >
      </b-card>
    </b-card-group>
    <!-- <Modal :modaltext="planClicked" /> -->
    <Modal :msg2="planClicked" />
  </b-row>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  name: "PricingCard",
  props: ["planName"],
  data: function () {
    return {
      planClicked: "",
    };
  },

  components: {
    Modal,
  },

  computed: {
    getPlanData() {
      return this.$store.getters.pricingOptions;
    },
  },

  methods: {
    clickPlan() {
      //   console.log(event.target.dataset.plan);
      this.planClicked = event.target.dataset.plan;
    },
  },
};
</script>

<style lang="scss">
.feature-list {
  margin: 0px 0px 20px 0px;
  padding: 0px;
  list-style: none;
}
.card-deck {
  .card-header h6 {
    font-size: 22px;
  }
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
