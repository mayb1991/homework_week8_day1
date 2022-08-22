import React, { useState, useEffect } from 'react'
import ShopProduct from '../components/ShopProduct';
import { useParams } from 'react-router-dom';



export default function SelectedProduct() {
    const { productId } = useParams()
    const [ product, setProduct ] = useState({})

    const getSingleProduct = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/product_info/${productId}`);
        const data = await res.json();
        if (data.status === 'ok'){
            setProduct(data.product)
        }
    };

    useEffect(()=>{
        getSingleProduct()
    }, [])

  return (
    <div>
        <ShopProduct productInfo = {product}/>


       
        

    </div>
  )
}