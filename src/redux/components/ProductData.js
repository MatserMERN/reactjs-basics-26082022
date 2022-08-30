import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fakeProductApi } from '../../api-store/fakeProductApi'
import { productAction } from '../actions/productAction'

const ProductData = () => {
    const products = useSelector(state => state.productList.products)
    const dispatch = useDispatch()

    const getProducts = async() => {
        const response = await fakeProductApi.get("/products")
       dispatch(productAction(response.data))
    }
    
    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div className="container">
        <h1>Product List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>{product.rating.rate}</td>
                            <td>
                                <img src={product.image} alt={product.title} style={{width: "150px", height: "100px"}} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductData