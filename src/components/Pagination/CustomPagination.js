import React, { useState } from 'react'
import './customPagingation.css'
import { useEffect } from 'react';

const Paginations = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    let perPage = 10;

    useEffect(() => {
        getAllProductData();
    }, [])

    const getAllProductData = async () => {
        const product = await fetch('https://dummyjson.com/products');
        const result = await product.json();
        result.total > 1 && setProducts(result);
    }

    const handleNextBton = (pageNum) => {

       page!==pageNum&& setPage(pageNum)
    }


    return (
        <div className='pagination'>
            <div className='index__btn'>  {
                products?.products?.length > 0 && products?.products?.slice(page * perPage - 10, page * perPage).map(({ brand, images, id }) => {
                    return (
                        <span className='single_product' key={id}>
                            <img src={images[0]} alt={brand}/>
                            <span>{brand}</span>
                        </span>
                    )
                })
            }
            </div>
            <div className='index__btn'>
                {page > 1 && <button onClick={() => setPage(page - 1)}>👈 </button>}
                {products?.products?.length > 1 && [...Array(products?.products?.length / perPage)].map((_, i) => {
                    return (
                        <span className={`num__container ${page ===i+1 ? 'active__index':''}`} key={i} onClick={() => handleNextBton(i + 1)}>{i + 1}</span>
                    )
                })}
                {(products?.products?.length / perPage) >page&&<button onClick={() => setPage(page + 1)}>👉 </button>}
            </div>
        </div>
    )
}

export default Paginations;