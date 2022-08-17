import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ToDoItems(props){
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
        {listItems}
    
    </div>;
  }

  export default ToDoItems;
