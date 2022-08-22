import React, { useState, useEffect } from 'react'
import ShopProduct from '../components/ShopProduct';


import { useParams } from 'react-router-dom';

export default function SelectedProduct() {
    const { itemId } = useParams()
    const [ item, setItem ] = useState({})

    const getSingleProduct = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/product_info/${itemId}`);
        const data = await res.json();
        if (data.status === 'ok'){
            setItem(data.item)
        }
    };

    useEffect(()=>{
        getSingleProduct()
    }, [])

  return (
    <div>
        <ShopProduct itemInfo = {item}/>


       
        

    </div>
  )
}