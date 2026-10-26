import axios from 'axios'

const API = axios.create({
  baseURL: '/api',
})

export const getDestinations = () => API.get('/destinations/')
export const getStays = () => API.get('/stays/')
export const getReviews = () => API.get('/reviews/')
export const getGuides = () => API.get('/guides/')
export const createBooking = (data) => API.post('/bookings/', data)
export const subscribe = (email) => API.post('/newsletter/', { email })

export default API
