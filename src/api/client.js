import axios from "axios";
import { useLoading } from "../stores/loading";
const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

client.interceptors.request.use((request) => {
  const loadingStore = useLoading();
  loadingStore.loading(true);
  return request;
});

client.interceptors.response.use((response) => {
  const loadingStore = useLoading();
  loadingStore.loading(false);
  return response;
},error =>{
  const loadingStore = useLoading();
  loadingStore.loading(false);
  return error;
});

export default client;
