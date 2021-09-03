import axios from "axios";

const BASE_URL = "http://localhost:5000";

const SlackApi = axios.create({
    baseURL: BASE_URL,
});


// Exporting Api into the global namespace for introspecting
window.SlackApi = SlackApi;

export default SlackApi;