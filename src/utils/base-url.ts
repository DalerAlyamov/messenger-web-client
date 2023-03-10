import isDev from "./is-dev";

const devURL = "http://192.168.1.23:8000/api/v1";
const prodURL = "http://192.168.1.23:8000/api/v1";

const baseURL = isDev ? devURL : prodURL;

export default baseURL;
