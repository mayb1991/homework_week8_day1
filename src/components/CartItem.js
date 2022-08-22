import React, { Component } from 'react';


export default class CartItem extends Component {
 
  deleteItem = async (e) => {
    
    const res = await fetch(`http://127.0.0.1:5000/api/cart/del`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${this.props.user.token}`,
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify({
            title: this.props.itemInfo.title
        })
    });
    const data = await res.json();
    console.log(data)

   
}


  render() {
    const item = this.props.itemInfo;

    
    return (
      <div>
        <div className="card m-3 pb-0 w-25" >
        <div className="image"><img className="card-img-top"  src={item.img_url} alt="..." /></div>
      
        <div className="card-body bg-dark text-light" styles={{"color": "white"}}>
        <h5 className="card-title" ><b>{item.title}</b></h5>
        <p className="card-text" ><b>${item.price}<br />{item.description}</b></p>
        <button onClick={(e) => { this.deleteItem(e)}} className="btn btn-light ">Delete</button>
        
        
        
      </div>
    </div>
    </div>
    )
  }
}