import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      string: ''
    };
    this.enterString = this.enterString.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.addClickEvent = this.addClickEvent.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  enterString(e) {
    this.setState({ string: e.target.value });
  }

  submitClick(e) {
    e.preventDefault();
    // this.setState({ array: this.state.array.concat(this.state.string)});
    this.setState({ array: [...this.state.array, this.state.string] });
    document.getElementById('myForm').reset();
  }

  addClickEvent(item) {
    console.log(item);
  }

  handleDelete(index) {
    let todos = this.state.array.slice();
    todos.splice(index, 1);
    this.setState({
      array: todos
    });
  }

  handleUpdate(index) {
    let todos = this.state.array.slice();
    let newTodo = prompt('Edit', todos[index]);
    todos[index] = newTodo;
    this.setState({
      array: todos
    });
  }

  render() {
    return (
      <div>
        Hello from List Component<br />
        <form id='myForm'>
        Add to array: <input type='text' name='addToArray' onChange={ this.enterString } />
        <input type='submit' value='submit' onClick={ this.submitClick }/>
        </form>
        {this.state.array.map((item, index) => (<ListEntry 
        key={index} 
        index={index} 
        listItem={ item } 
        click={ this.addClickEvent }
        delete={ this.handleDelete } 
        update={ this.handleUpdate }
        /> ))}
      </div>
    )
  }
}

export default List;