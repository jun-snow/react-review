import React from 'react';
import List from './List.jsx';

// const App = (props) => (
//   <div>Hello from {props.first} {props.last}!</div>
// )

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    };
    this.enterFirst = this.enterFirst.bind(this);
    this.enterLast = this.enterLast.bind(this);
  }

  enterFirst(e) {
    this.setState({
      first: e.target.value,
    });
  }

  enterLast(e) {
    this.setState({
      last: e.target.value,
    });
  }

  render() {
    
      if (this.state.first === 'Jun' && this.state.last === 'Kelly') {
        return <List />;
      } else {
        return (
          <div>
            Hello from App Component <br />
            First: <input type='text' name='first' onChange={ this.enterFirst }/> <br />
            Last: <input type='text' name='last' onChange={ this.enterLast } /> <br />
            {this.state.first} {this.state.last}<br />
            
          </div>
        )
      }
    
    
  }
}

export default App;

