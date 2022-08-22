import React, { Component } from 'react'
import CartItem from '../components/CartItem';





export default class ShoppingCart extends Component {
    constructor(){
        super();
        this.state = {
            cart_items:[]
        }
    }
 
    componentDidMount = async () => {
        this.getItems()
    }
    
    getItems = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/cart`, {
            headers: {
                Authorization: `Bearer ${this.props.user.token}`,
                "Content-Type": 'application/json'
            }
        });
        const data = await res.json();
        this.setState({cart_items: data.items})  
     
    }

    showCart = () => {
 
            return this.state.cart_items.map((p,i)=><CartItem  key={i} itemInfo={p} user={this.props.user}/>)
        
        
    }
   

    render = () => {
        return (<>
       
            <div className='container'>
                <div className="mx-auto"><h1 className='text-center mx-auto mb-5 mt-5'>Cart</h1>
                </div >
                <div>
                {this.showCart()}
                </div>
            </div>
            </>
        )
    }
}