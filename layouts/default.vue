<template>
  <b-container>
    <b-row class="mt-5" align-v="center">
      <b-col>
        <h1>Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
      <b-col sm="auto" class="mt-3 mt-sm-0">
        <ThemeSwitcher />
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
export default {
  name: 'Default',
  components: { ThemeSwitcher },
};
</script>

<style lang="scss" scoped>
  .nuxt-link-exact-active {
    font-weight: 700;
  }

  @include media-breakpoint-down(sm) {
    h1 {
      font-size: 1.15rem;
    }
  }
</style>
