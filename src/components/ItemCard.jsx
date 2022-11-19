import React from 'react'

const ItemCard = ({ title, img, desc, price, category, rating }) => {
    return (
        <div className='text-center rounded shadow-md'>
            <div className='flex justify-center'>
                <img className='overflow-hidden w-auto h-[200px] rounded-t' src={img} alt={title} />
            </div>
            <div className='bg-slate-300 text-white h-[200px]'>
                <p className=' font-bold mb-1'>{title}</p>
                <span className='rounded-full p-1'>{desc}</span>
                <div>
                    <p>Price: {price}</p>
                </div>
                <div>
                    Category: {category}
                </div>
                <div>
                    Rating: {rating}
                </div>

            </div>

        </div>
    )
}

export default ItemCard