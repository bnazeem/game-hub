import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bcb390b2aa334dd28df52c3502995139",
  },
});
