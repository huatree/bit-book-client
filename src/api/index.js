/**
 * @fileoverview api
 */

 import axios from 'axios'

 export function home2() {
   return axios({
     method: 'get',
     url: `${process.env.VUE_APP_BOOK_URL}/book/home2`
   })
 }

 export function home() {
   return axios({
     method: 'get',
     url: `${process.env.VUE_APP_BASE_URL}/book/home`
   })
 }
