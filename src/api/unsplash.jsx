import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uNC4j1D8z2chxgY5U3cJmXW5ERi6Lm16Jcv_qFFOe9M'
  }
});