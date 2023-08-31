<template>
<div class="container" v-if="getFullWeather">
    <Header />
    <Main />
</div>
</template>
<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Header, Main},
  methods: {
    ...mapActions(['getWeather'])
  },
  computed: {
    ...mapGetters(['getFullWeather'])
  },
  created(){
    this.getWeather('Chirchiq')
  }
 }
</script>
<style lang="scss">
  
</style>