import axios from "axios";

export default axios.create({
  baseURL: "http://167.71.237.60/templates",
  headers: {
    "Content-type": "application/json"
  }
});