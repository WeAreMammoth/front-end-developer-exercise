<template>
  <b-container>
    <b-row>
      <b-col class="text-right">
        <b-button size="sm" @click="toggleDarkMode()">Toggle Dark Mode</b-button>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <h1>Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
    <b-modal id="site-modal" title="New Plan Selected">
      <p class="my-4">You have chosen: <strong>{{ chosenPlan }}</strong></p>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: 'Default',
  computed: {
    chosenPlan () {
      return this.$store.state.chosenPlan
    }
  },
  methods: {
    toggleDarkMode() {
      document.querySelector('body').classList.toggle('dark-mode')
    }
  }
};
</script>

<style lang="scss" scoped>
a.nuxt-link-exact-active {
  font-weight: bold;
}

@include media-breakpoint-down(sm) {
  h1 {
    @include font-size($h5-font-size)
  }  // Styles
}
</style>
