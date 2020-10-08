import React, { Component } from 'react';
import './App.css';


function ZipCode(props) {
 
return (
<div><p> {props.data}</p>
</div>);
}

function CitySearchField(props) {
  return (<div><p>City:</p><form onSubmit= {(e)=>props.zipChanged(e)}><input name="textBox1" type="text" /><input type="submit" ></input></form></div>);
}


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      zipData:'false',
      zipCodes:[],
    }
  }
  handleChange(event){
    event.preventDefault();
    if(event.target.textBox1.value.length >5){
    fetch('http://ctp-zip-api.herokuapp.com/city/'+ event.target.textBox1.value.toUpperCase())
    .then(response => response.json())
    .then(response=>{
      console.log(response)
      this.setState({
        zipData:response,
        zipCodes:[]
      })
   })
  }
   
  
  }
  createzipCodes(){
    for (let i=0;i<this.state.zipData.length;i++){
      this.state.zipCodes.push(<ZipCode data={this.state.zipData[i]}/>)
    }
   
  }
  render() {
    if(this.state.zipData !== 'false'){
    this.createzipCodes();
    }
    return (
      <div className="App">
        <div className="App-header">
          <h2>City Search</h2>
        </div>
        <CitySearchField zipChanged={(e)=>this.handleChange(e)}/>
        <div>
        <div className="zipCodes">{this.state.zipCodes}</div>
        </div>
      </div>
    );
  }
}

export default App;
