<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1 class="site-heading">Company Inc.</h1>
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

  // Bootstrap uses 768px as the min-width for --breakpoint-md,
  // so start 1 below that for this text size reset
  @media screen and (max-width: 767px) {
    .site-heading {
      font-size: 2rem;
    }
  }
</style>
