import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Place from './Place'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: []
    }
    this.handlePlaceClick= this.handlePlaceClick.bind(this)
  }
  handlePlaceClick(id){
    let newArray = this.state.selectedId.concat([id])
    this.setState({selectedId: newArray})
  }

  render() {

    let className;
    let placesList = this.props.data.places.map((place) =>{
      if (this.state.selectedId.includes(place.id)){
        className="selected"
      }else{
        className=""
      }

      return(
        <Place
          key={place.id}
          id={place.id}
          name={place.name}
          className={className}
          handlePlaceClick={this.handlePlaceClick}
        />
      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
          </div>
            <ul>{placesList}</ul>
        </div>
      </div>
    );
  }
}

export default App;
