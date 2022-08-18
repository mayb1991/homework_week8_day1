import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './views/About';
import Contact from './views/Contact'
import ToDoItems from './views/News'
import Home from './views/Home'
import UserSignUp from './views/UserSignUp';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Bradley",
        email: "MayDayEnterprisesInc@MayDay.com",
        businesses: ["May-Day Bartending LTD, ",  " 7 Seas Realty LLC, ", " Bearded Consulting LLC, ", " All Time Pressure Cleaning Inc"] ,
        toDoList: [],
        currentToDo: {
          text: "",
          key: ""
        },
    }
    this.addToDo = this.addToDo.bind(this);
    this.toDoInput = this.toDoInput.bind(this);
    this.delToDo = this.delToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
}

addToDo(e){
  e.preventDefault();
  const newToDo = this.state.currentToDo;
  if(newToDo.text !==""){
    const toDoList = [...this.state.toDoList, newToDo];
  this.setState({
    toDoList: toDoList,
    currentToDo: {
      text: "",
      key: ""
    }
  })
  }
}

toDoInput(e){
  this.setState({
    currentToDo: {
      text: e.target.value,
      key: Date.now()
    }
  })
}

delToDo(key){
  const filteredToDoList = this.state.toDoList.filter(todo =>
    todo.key !== key);
  this.setState({
    toDoList: filteredToDoList
  })
}

updateToDo(text, key) {
  const updateItem = this.state.toDoList;
  updateItem.map(ToDo => {
    if (ToDo.key === key) {
      ToDo.text = text;
    }
  })
  this.state({
    updateItem: updateItem
  })
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
          <Route path='/news' element={<ToDoItems/>}/>
          <Route path='/signup' element={<UserSignUp/>}/>
        </Routes>
      </div>
    )
  }
}

