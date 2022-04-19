<template>
  <div>
    <b-container class="text-center">
      <b-row>
        <b-col class="mt-5">
          <h1>Pricing</h1>
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
      <b-row>
        <b-col
          lg="4"
          v-for="{
            name,
            cost,
            features,
            cta,
            paid,
            featured,
          } in pricingOptions"
          :key="name"
        >
          <PricingCard
            :name="name"
            :cost="cost"
            :features="features"
            :cta="cta"
            :paid="paid"
            :featured="featured"
            @select="selectPlan(name)"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  layout: "default",
  computed: {
    pricingOptions() {
      return this.$store.state.pricingOptions;
    },
  },
  methods: {
    selectPlan(name) {
      this.$store.commit("choosePlan", name);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>
