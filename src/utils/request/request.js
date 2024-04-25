import axios from "axios";
const configuredUrl = axios.create({
  baseURL: "https://itpb.onrender.com/api/v1",
  withCredentials: true,
});

export default configuredUrl;
