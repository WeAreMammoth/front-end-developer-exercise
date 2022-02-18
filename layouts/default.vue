<template>
  <b-container>
    <b-button @click="toggleDarkMode('addClass', 'darkMode')" pill variant="dark">night</b-button>
    <b-button @click="toggleDarkMode('removeClass', 'darkMode')" pill variant="light">day</b-button>
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
    
    
    
  </b-container>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
     
    };
  },
  methods: {
    toggleDarkMode(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  font-weight: bolder;
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>
