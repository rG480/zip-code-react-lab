import React, { Component } from 'react';
import './App.css';


function City(props) {
 
return (
<div><p> {props.data.City}</p>
<p>{props.data.State}</p>
<p>{props.data.EstimatedPopulation}</p></div>);
}

function ZipSearchField(props) {
  return (<div><p>Zip Code:</p><span><input type="text" onChange={(e)=>props.zipChanged(e)}/></span></div>);
}


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cityData:'false',
      cities:[],
    }
  }
  handleChange(event){
    if(event.target.value.length >5){
    fetch('http://ctp-zip-api.herokuapp.com/city/'+event.target.value)
    .then(response => response.json())
    .then(response=>{
      console.log(response)
      console.log(response[0].City)
      this.setState({
        cityData:response,
        cities:[]
      })
      console.log(response)
      
     
    })
  }
   
  
  }
  createCities(){
    for (let i=0;i<this.state.cityData.length;i++){
      this.state.cities.push(<City data={this.state.cityData[i]}/>)
    }
   
  }
  render() {
   
    this.createCities();
    return (
      <div className="App">
        <div className="App-header">
          <h2>City Search</h2>
        </div>
        <ZipSearchField zipChanged={(e)=>this.handleChange(e)}/>
        <div>
        <div className="cities">{this.state.cities}</div>
        </div>
      </div>
    );
  }
}

export default App;
