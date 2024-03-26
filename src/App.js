import './App.css';
import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:"anurag"
    }
  }
  render(){
   return(
    <h1>hello priyanka {this.state.data}</h1>
   )
   
  }
}

export default App;
