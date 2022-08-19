import React, { Component } from 'react'
import ToDoItem from '../components/ToDoItem';

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: []
        }
    };

    addToDo = (e) => {
        e.preventDefault();
        const honeyDoList = e.target.do.value
        const obj = {
            text: honeyDoList,
            complete: false
        }

        this.setState({todoItems: this.state.todoItems.concat([obj])})
        // const copy = [...this.state.todoItems,honeyDoList]
        // this.setState({todoItems: copy})
    };
    
   
    delToDo = (index) => {
        const newHoneyDo = [...this.states.todoItems]
        newHoneyDo.splice(index, 1)
        this.setState({todoItems: newHoneyDo})
    }; 

    done = (newObj, index) => {
        const newHoneyDo = this.state.todoItems.slice()
        newHoneyDo.splice(index, 1, newObj)
        this.setState({todoItems: newHoneyDo})
    };

    showList = () => {
        return this.state.todoItems.map((t, i) => <ToDoItem key={i} obj={t} index={i} done={this.done} delToDo={this.delToDo}></ToDoItem>)
    };

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.addToDo(e)}}>
            <input name="do"/>
            <button>Add To List</button>
        </form>

        {this.showList()}

      </div>
    )
  }
}
