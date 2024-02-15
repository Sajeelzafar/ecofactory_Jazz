import axios from 'axios';
// const PRODUCTION_URL = "https://jazzcashbackendsajeel.onrender.com/";
const BASE_URL = "http://localhost:3500";
export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
});

