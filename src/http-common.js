import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/templates",
  baseURL: "https://167.71.237.60",
  headers: {
    "Content-type": "application/json"
  }
});