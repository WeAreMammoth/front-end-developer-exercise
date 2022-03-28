<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!

          <PricingCard style="padding-top:5rem;"></PricingCard>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import { PricingCard} from '../components/PricingCard';
export default {
  name: 'Pricing',
  layout: 'default',
    computed: {},
  components:PricingCard,
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>
