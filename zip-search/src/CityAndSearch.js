import React from 'react'
import City from './City.js'

/*class CityAndSearch extends React.Component{
    constructor(props){
        super(props)
         this.state={
            numCities:0,
        }
    }
    handleChange(){
        fetch('http://ctp-zip-api.herokuapp.com/zip/10001')
        .then(response => response.json())
        .then(response=>console.log((response)))
        this.setState({
           numCities:1
        })
      }
      render() {
        let cities =[];
        for (let i=0;i<this.state.numCities;i++){
          cities.push(<City/>) 
        }
        return (
          <div className="App">
            <div className="App-header">
              <h2>Zip Code Search</h2>
            </div>
            <div><p>Zip Code:</p><input type="text" onChange={()=>this.handleChange} /></div>
            <div>
            <div className="boards">{cities}</div>
            </div>
          </div>
        );
      }
}
export default CityAndSearch*/