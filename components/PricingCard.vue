<template>
  <section class="pricing-plan">
    <article
      v-for="(option) in pricingOptions"
      :key="option.name"
      class="plan"
      :class="[option.name]"
      @click="name = option.name"
    >
      <div class="plan-name">
        <h2>{{ option.name }}</h2>
      </div>
      <div class="plan-body">
        <p class="plan-cost">${{ option.cost }}/mo</p>
        <ul class="plan-list">
          <li
            class="plan-feature"
            v-for="(features, index) in option.features"
            :key="`feature ${index}`"
          >
            {{ features }}
          </li>
        </ul>
        <button :class="{ unpaid: !option.paid }" @click="toggleModal">
          {{ option.cta }}
        </button>
      </div>
      <NewPlanModal
        v-if="showModal"
        @close="toggleModal"
        v-bind:planName="name"
      />
    </article>
  </section>
</template>

<script>
export default {
  name: "PricingCard",
  data() {
    return {
      showModal: false,
      name: null,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    pricingOptions() {
      return this.$store.getters.pricingOptions;
    },
    name() {
      return this.option.name;
    },
  },
};
</script>

<style lang="scss" scoped>
$border: 1px solid rgba(0, 0, 0, 0.125);
$blueborder: 1px solid rgba(0, 123, 225, 1);
$black: rgba(200, 200, 200, 0.125);
$blue: rgba(0, 123, 225, 1);
$lightgrey: rgba(250, 250, 250, 1);

.pricing-plan {
  display: flex;
  flex-direction: row;
  gap: 1.8em;
  margin-top: 2em;
  @media (max-width: 996px) {
    flex-direction: column;
    align-items: center;
  }
}
.pricing-container {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.plan {
  background: $lightgrey;
  display: flex;
  flex: 1;
  flex-direction: column;
  border: $border;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (max-width: 996px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  &.Enterprise {
    background: $blue;
    border: $blueborder;
    .plan-name {
      background: $blue;
      border: $blueborder;
      color: white;
    }
  }

  .plan-name {
    background: $black;
    border-bottom: $border;
    padding: 0.4em 0;
    width: 100%;
  }
  .plan-body {
    background: white;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0.4em;
    padding: 0.4em 0;

    .plan-cost {
      color: #000;
      font-size: 1.8em;
      font-weight: 600;
      margin-block-end: unset;
    }
    .plan-list {
      font-weight: 600;
      padding-inline-start: 0;
      margin-block-end: 0;
    }
    .plan-feature {
      list-style-type: none;
    }
    button {
      color: #fff;
      font-size: 1em;
      font-weight: 600;
      background-color: #007bff;
      border-color: #007bff;
      border-radius: 4px;
      border-style: none;
      padding: 0.4em 0.8em;
      margin-top: 0.6em;
      margin-bottom: 1em;
      &:hover {
        background-color: #0063ce;
        border-color: #0063ce;
      }
      &.unpaid {
        color: $blue;
        background-color: white;
        border: $blueborder;
        &:hover {
          background-color: $lightgrey;
        }
      }
    }
  }
}
</style>
