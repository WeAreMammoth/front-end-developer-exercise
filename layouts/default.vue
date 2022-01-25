<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1 class="company-header">Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Default',
};
</script>

<style lang="scss" scoped>
  a.nuxt-link-exact-active{
    font-weight: bold;
  }

  h1.company-header {
    @media screen and (max-width: 990px) {
      font-size: xx-large;
    }
  }
  

</style>
