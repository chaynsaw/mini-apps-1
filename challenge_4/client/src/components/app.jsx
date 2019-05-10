import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: 0
    }
  }
  render(props) {
    return (
      <div>
        <Square />
        <Square /> 
        
      </div>
    )
  }
}

var Row = (props) => (
  <div id="row"></div>
)

var Square = (props) => (
  <div id="square">Square.</div>
)
export default App