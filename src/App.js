import React, { Component } from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import About from './About';
import Contact from './Contact'
import ToDoItems from './News'
import Home from './Home'


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

  updateToDo(text,key){
    const  updateItem = this.state.toDoList;
    updateItem.map(ToDo => {
      if(ToDo.key === key){
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
        </Routes>

        <header>
                    <form id="to_do_form" onSubmit={this.addToDo}>
                        <input type="text" placeholder='Enter anything you need todo' value={this.state.currentToDo} 
                        onChange={this.toDoInput}></input>
                        <button type='submit'>Add To Do</button>
                    </form>
                    <p>{this.state.toDoList.text}</p>
                    <ToDoItems toDoList = {this.state.toDoList} delToDo = {this.state.delToDo}/>
                </header>
                

      </div>
    )
  }
}

