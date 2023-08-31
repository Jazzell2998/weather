import axios from "axios";
import {
    createStore
} from "vuex";

const store = createStore({
    state: {
        apiKey: '852fea6c8191e19d3d72f836adf3521f',
        getFullWeather: null
    },
    mutations: {
        getWeather(state, payload){
            state.getFullWeather = payload
        }
    },
    actions: {
        async getWeather({commit, state}, city){
            try {
                let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                let weather = res.data[0]
                let { lat,lon,name } = weather
                let res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${state.apiKey}&units=metric&lang=ru`)
                let weatherInfo = res2.data
                let weatherObj = { ...weatherInfo, name: name }
                commit('getWeather', weatherObj)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getFullWeather: state => state.getFullWeather,
    }
})

export default store