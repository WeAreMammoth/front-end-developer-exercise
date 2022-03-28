<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1>Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
        <button class="" v-on:click="themeChange">Toggle dark mode</button>
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
    methods: {
      themeChange: function (e) {

        var body = document.body;
        body.classList.toggle("dark-mode");
      },
    }
  };
</script>

<style lang="scss" scoped>

  .dark-mode {
    background-color: #181818;
    color: #A7A7A7;
  }


</style>
