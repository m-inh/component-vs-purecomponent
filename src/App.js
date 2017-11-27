import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class A extends Component {
  render () {
    console.log('render a');
    return (
      <div>
        <h2>A:</h2>
        <p>{this.props.user.name}</p>
        <p>{'was rendered at: ' + Date.now()}</p>
      </div>
    )
  }
}

class B extends PureComponent {
  render () {
    console.log('render b');
    return (
      <div>
        <h2>B:</h2>
        <p>{this.props.user.name}</p>
        <p>{'was rendered at: ' + Date.now()}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user_a: {
        name: 'a'
      },
      user_b: {
        name: 'b'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <A user={this.state.user_a}></A>
        <B user={this.state.user_b}></B>

        <button onClick={() => {this.setState(state => ({user_a: {...state.user_a, name: state.user_a.name + 'a'}}))}}>Change a</button>
        <button onClick={() => {this.setState(state => ({user_b: {...state.user_b, name: state.user_b.name + 'b'}}))}}>Change b</button>
        <button onClick={() => {this.setState(state => ({abc: 'some thing' + Date.now() }))}}>Change something else</button>

      </div>
    );
  }
}

export default App;
