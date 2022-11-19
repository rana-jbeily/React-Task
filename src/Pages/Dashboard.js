import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const promise = await fetch('https://fakestoreapi.com/products')
            const data = await promise.json()
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <div className='h-screen grid grid-cols-3 gap-4 p-4'>
            {products.map(product => {
                return (
                    <ItemCard
                        key={product.id}
                        img={product.image}
                        title={product.title}
                        desc={product.description}
                        price={product.price}
                        category={product.category}
                        rating={product.rating.rate}

                    />
                )
            })}

        </div>
    )
}

export default Dashboard