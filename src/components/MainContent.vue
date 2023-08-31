<template lang="pug">
.main-content
  .main-content-left
    p {{ Math.round(getFullWeather.main.temp) }}°
    p Today
    p Time: 21:54
    p City: {{getFullWeather.name}}
    img(src="../assets/img/sun.svg", alt="alt", v-if="descr == 'ясно'")
    img(src="../assets/img/rain.svg", alt="alt", v-else-if="descr == 'дождь'")
    img(src="../assets/img/small_rain_sun.svg", alt="alt", v-else-if="descr == 'переменная облачность'")
    img(src="../assets/img/small_rain.svg", alt="alt", v-else-if="descr == 'небольшой дождь'")
    img(src="../assets/img/mainly_cloudy.svg", alt="alt", v-else-if="descr == 'пасмурно'")
  .main-content-right
    div
      .border
        img(src="../assets/img/temp.svg", alt="")
      span Temperature
      p {{ Math.round(getFullWeather.main.temp) }}° - feels like {{ Math.round(getFullWeather.main.feels_like) }}°
    div
      .border
        img(src="../assets/img/pressure.svg", alt="")
      span Pressure
      p {{getFullWeather.main.pressure}} mm mercury column
    div
      .border
        img(src="../assets/img/percipitation.svg", alt="")
      span Humidity
      p  {{getFullWeather.main.humidity}}%
    div
      .border
        img(src="../assets/img/wind.svg", alt="")
      span Wind
      p {{ getFullWeather.wind.speed }} m/s 
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['getFullWeather']),
    descr(){
      return this.getFullWeather.weather[0].description
    }
  },
};
</script>
<style lang="scss">
.main-content {
  display: flex;
  justify-content: space-between;
  &-left {
    position: relative;
    background: #ffffff;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    border-radius: 20px;
    width: 400px;
    padding: 20px;
    p {
      font-size: 25px;
      color: #939cb0;
      margin-top: 14px;
      &:nth-child(1) {
        margin-top: 0;
        font-weight: 500;
        font-size: 96px;
        color: #4793ff;
      }
      &:nth-child(2) {
        margin-top: 0;
        font-size: 40px;
        color: black;
      }
    }
    img {
      position: absolute;
      top: 46px;
      right: 20px;
      width: 119px;
      height: 119px
    }
  }
  &-right {
    width: 750px;
    padding: 42px 0 41px 31px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    background: #FFFFFF;
    box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
    border-radius: 20px;
    position: relative;
    z-index: 0;
    &>img{
       position: absolute;
       right: 0;
       top: 0;
       z-index: -1;
;
    }
    div {
      display: flex;
      align-items: center;
      span {
        margin: 0 20px;
        width: 96px;
        font-size: 14px;
        color: #939cb0;
      }
      .border {
        width: 38px;
        height: 38px;
        background: #ffffff;
        box-shadow: 1px 4px 10px -1px rgba(71, 147, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        font-size: 14px;
        color: black;
        font-weight: 500;
      }
  
    }
  }
}
</style>