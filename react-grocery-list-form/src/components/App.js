import React, { Component } from 'react'
import GroceryForm from './GroceryForm'
import GroceryList from './GroceryList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceries: [
        { id: 1, name: "Oranges" },
        { id: 2, name: "Bananas" },
        { id: 3, name: "Bread" }
      ]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()
    alert('Form was submitted')
  }

  handleButtonClick(event) {
    alert('Button was clicked')
  }

  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryForm handleFormSubmit={this.handleFormSubmit} />
        <GroceryList
          groceries={this.state.groceries}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

export default App
