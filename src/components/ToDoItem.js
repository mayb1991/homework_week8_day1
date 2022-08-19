import React, { Component } from 'react'

export default class ToDoItem extends Component {
    handelClick = () => {
        const copy = {...this.props.obj, complete: !this.props.obj.complete}
        this.props.done(copy, this.props.index)
    };

  render() {
    return (
      <div>
        {this.props.obj.text}
        <input type="checkbox" checked={this.props.obj.complete} />
        <button onClick={()=>{this.handelClick()}}>Make As Done!</button>
        <button onClick={()=>{this.props.delToDo(this.props.index)}}>Delete List Item</button>

      </div>
    )
  }
}
