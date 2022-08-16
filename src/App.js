import React, { Component } from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './About';
import Contact from './Contact'
import News from './News'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        name: "Bradley",
        email: "MayDayEnterprisesInc@MayDay.com",
        businesses: ["May-Day Bartending LTD, ",  " 7 Seas Realty LLC, ", " Bearded Consulting LLC, ", " All Time Pressure Cleaning Inc"] ,
    }
}

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome My Website In Progress</h1>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact email ={this.state.email} bus ={this.state.businesses}/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
    )
  }
}

