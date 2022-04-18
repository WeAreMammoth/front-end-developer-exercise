<template>
  <b-container>
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
  name: 'Default',
};
</script>


<style lang="scss" scoped>

a.nuxt-link-exact-active {

  font-weight: bold;
}

@media screen and (min-width: 100px) {

h1 {

font-size: 15px;
}
a{
  font-size: 10px;
}
a.nuxt-link-exact-active {

  font-weight: bold;
}
}


@media screen and (min-width: 400px) {

h1 {

font-size: 22px;
}
a{
  font-size: 15px;
}
a.nuxt-link-exact-active {

 font-weight: bold;
}
}

@media screen and (min-width: 800px) {

h1 {

font-size: 30px;
}
a{
  font-size: 20px;
}
a.nuxt-link-exact-active {

  font-weight: bold;
}
}


</style>
