<template>
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
      <div class='pricingCards'>
        <PricingCard title='Free' price=0 :description="['10 users included', '2 GB of storage', 'Email support', 'Help center access']" ctaText='Sign up for free' isFree />
        <PricingCard title='Pro'  price=15 :description="['20 users included', '10 GB of storage', 'Priority email support', 'Help center access']" ctaText='Get started'/>
        <PricingCard title='Enterprise'  price=29 :description="['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access']" ctaText='Contact'/>
      </div>
      
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Pricing',
  layout: 'default',
  computed: {},
};
</script>

<style lang="scss" scoped>
@import 'global';

p {
  color: $darkgray;
  font-size: 1.25rem;
}

.pricingCards {
  display: block;
  width: 100%;
  justify-content: center;

  @media (min-width: $breakpoint-desktop) {
    display: flex;
    
  }
}

</style>
