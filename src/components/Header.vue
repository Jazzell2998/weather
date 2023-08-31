<template lang="pug">
header.header
  nav.header-nav
    a(href="#") 
      img(src="../assets/img/logo.svg", alt="")
      span vue weather
    .header-nav-search
      img(src="../assets/img/waterDrop.svg", alt="")
      input(
        @keydown.enter="getWeather(query)"
        type="text",
        placeholder="Выбрать город...",
        v-model="query"
      )
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["getWeather"]),
  },
};
</script>
<style lang="scss">
.header {
  padding: 30px 0 40px 0;
  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 25px;
      line-height: 30px;
      text-transform: uppercase;
      color: #4793ff;
      span {
        font-weight: 700;
      }
    }
    &-search {
      display: flex;
      gap: 20px;
      align-items: center;
      input {
        background: rgba(71, 147, 255, 0.2);
        border-radius: 10px;
        padding: 9px;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        line-height: 20px;
        width: 194px;
        border: none;
        outline: none;
      }
    }
  }
}
</style>