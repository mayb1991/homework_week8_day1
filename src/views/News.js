import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ToDoItems= (props) =>{
    const toDoList1 = props.toDoList1;
    const listItems = (toDoList1 || []).map(toDoItem =>
   {
       return <div className="list" key={toDoItem.key}>
     <p>
         <input type="text" id={toDoItem.Item.key} value={toDoItem.text} onChange={(e)=>{
             props.setUpdate(e.target.value,toDoItem.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.delToDo(toDoItem.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        <header>
            <form id="to_do_form" onSubmit={this.addToDo}>
                <input type="text" placeholder='Enter anything you need todo' value={this.currentToDo} 
                onChange={this.toDoInput}></input>
                <button type='submit'>Add To Do</button>
            </form>
            <p>{this.state.toDoList.text}</p>
            <ToDoItems toDoList = {this.state.toDoList} delToDo = {this.state.delToDo}/>
        </header>
        
        {listItems}
    
    </div>;
  }

  export default ToDoItems;
