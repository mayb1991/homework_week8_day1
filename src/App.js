import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './views/About';
import Contact from './views/Contact'
import ToDoList from './views/ToDoList';
import Home from './views/Home'
import UserSignUp from './views/UserSignUp';
import Login from './views/Login';
import News from './views/News';
import ShoppingMall from './views/ShoppingMall';
import SelectedProduct from './views/SelectedProduct';
import ShoppingCart from './views/ShoppingCart';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bradley",
      email: "MayDayEnterprisesInc@MayDay.com",
      businesses: ["May-Day Bartending LTD, ", " 7 Seas Realty LLC, ", " Bearded Consulting LLC, ", " All Time Pressure Cleaning Inc"],
    }
  }
  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome My Website In Progress</h1>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact email={this.state.email} bus={this.state.businesses} />} />
          <Route path='/news' element={<News />} />
          <Route path='/todo' element={<ToDoList />} />
          <Route path='/signup' element={<UserSignUp />} />
          <Route path='/login' element={<Login login={this.logMeIn} />} />
          <Route path='/shopping' element={<ShoppingMall user={this.state.user} />} />
          <Route path='/productInfo/:itemId' element={<SelectedProduct />} />
          <Route path='/cart' element={<ShoppingCart user={this.state.user}/>} />

        </Routes>
      </div>
    )
  }
}
