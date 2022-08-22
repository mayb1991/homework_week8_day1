import React, { Component } from 'react'
import ShopProduct from '../components/ShopProduct';


export default class ShoppingMall extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount = async () => {
        this.getProducts()
    }

    getProducts = async () => {
        const res = await fetch('http://127.0.0.1:5000/api/shop');
        const data = await res.json();
        this.setState({ products: data.products })

    }

    showProducts = () => {
        return this.state.products.map(p => <ShopProduct key={p.id} productInfo={p} user={this.props.user} />)
    }
    render() {
        return (
            <div className='container'>
                
                <div className='mx-auto'>
                    <h1 className='text-center mx-auto mb-5 mt-5'>Shopping Mall Coming Soon.</h1>
                    <div className='show-products '>
                        {this.showProducts()}
                    </div>

                </div>
            </div>
        )
    }
}

