import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5adb95efdce646cc94788f47202fac68'
    }
})