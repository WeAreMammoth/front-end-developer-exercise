<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1 >Company Inc.</h1>
        <NuxtLink to="/" class="nuxt-link-active">Home</NuxtLink>
        <NuxtLink to="pricing" class="nuxt-link-active">Pricing</NuxtLink>
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
h1 {
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
}

a.nuxt-link-exact-active {
  color: #00c58e;
  font-weight: bold;
}

</style>