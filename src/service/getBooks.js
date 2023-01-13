import axios from "axios"
import { BASE_URL } from "../consts"

export const getBooks=(value)=>{
  return axios.get(`${BASE_URL}/volumes?q=intitle:${value}&printType=books&orderBy=newest&maxResults=35`)
}   