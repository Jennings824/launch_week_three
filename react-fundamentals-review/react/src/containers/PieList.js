import React from 'react';
import Pie from '../components/Pie';

class PieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null
    }
    this.handlePieClick = this.handlePieClick.bind(this)
  }

  handlePieClick(id) {
    this.setState({selectedId: id})

  }

  render(){

    let className;
    let pieList = this.props.pies.map((pie) => {

      if(pie.id === this.state.selectedId) {
        className = "selected"
      } else {
        className = ""
      }

      let onPieClick = () => this.handlePieClick(pie.id)

      return (
        <Pie
          key={pie.id}
          id={pie.id}
          name={pie.name}
          handlePieClick= {onPieClick}
          className={className}
          />
      )
    })

    return (
      <div>
        <ul>{pieList}</ul>
      </div>
    );
  }
}

export default PieList;
