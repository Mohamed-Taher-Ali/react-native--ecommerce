import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

export const getAllProducts = (limit: number=2) => (
    apiClient.get(`products?limit=${limit}`)
)

export const getProductDetails = (productId: string) => (
    apiClient.get(`products/${productId}`)
)

export const getSingleCart = (cartId: string = '1') => (
    apiClient.get(`carts/${cartId}`)
)