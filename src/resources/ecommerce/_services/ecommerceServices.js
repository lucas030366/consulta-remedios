import axios from "axios"

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getProducts(){
    return apiClient.get("/ecommerce")
  },
  getProduct(id){
    return apiClient.get(`/ecommerce/${id}`)
  },
  postProduct(pdt){
    return apiClient.post("/ecommerce", pdt)
  },
  putProduct(pdt){
    return apiClient.put(`/ecommerce/${pdt.id}`, pdt)
  },
  deleteProduct(id){
    return apiClient.delete(`/ecommerce/${id}`)
  }
}