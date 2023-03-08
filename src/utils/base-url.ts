import isDev from "./is-dev";

const devURL = "test";
const prodURL = "test";

const baseURL = isDev ? devURL : prodURL;

export default baseURL;
