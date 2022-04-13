<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1 class="site-title">Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
      <b-col>
        <b-form-checkbox v-model="isDarkTheme" name="check-button" switch>
           <b><span class="button-switch">Switch {{ isDarkTheme ? 'Light' : 'Dark'}} Mode</span></b>
    </b-form-checkbox>
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
  data(){
    return {
      isDarkTheme: false,
    }
  },
  watch: {
    isDarkTheme: {
      handler(){
       if (process.client){ 
          if(this.isDarkTheme){
            console.log(`Switching to Dark Mode...`);
            document.body.classList.add("dark");
          }else {
            console.log(`Switching to Light Mode...`);
            document.body.classList.remove("dark");
          }
       }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
 font-weight: bold;
}
@media(max-width: 760px) {
  .site-title{
    font-size: 1.8rem;
  }
}
</style>
