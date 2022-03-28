<template>
  <b-container>
    <b-row class="my-3">
      <b-col>
        <h1 class="company-title">Company Inc.</h1>
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
  .nuxt-link-exact-active {
    font-weight: bold;
  }

  @media only screen and (max-width: 700px) {
    h1.company-title {
      font-size: 1.5rem;
    }
  }


</style>
