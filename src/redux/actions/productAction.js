import { GET_PRODUCTS } from "../action-types/product-types"

export const productAction = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}