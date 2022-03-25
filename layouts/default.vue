<template>
  <b-container>
    <b-row class="my-5 align-items-center">
      <b-col>
        <h1 class="company_logo">Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
      <b-col class="d-flex justify-content-end">
        <ThemeSwitch/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ThemeSwitch from '../components/ThemeSwitch.vue'

export default {
  name: 'Default',
  components: {
    ThemeSwitch
  }
};
</script>

<style lang="scss" scoped>
  .company_logo {
    font-size: 1.3rem;
    font-weight: bold;
  }
  a {
    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }

  @media screen and(min-width: 1024px) {
    .company_logo {
      font-size: 2.5rem;
    }
  }
</style>
