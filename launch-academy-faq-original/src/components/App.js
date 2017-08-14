import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shown: false}
    this.handleClickTrue = this.handleClickTrue.bind(this);
    this.handleClickFalse = this.handleClickFalse.bind(this);

  }
  handleClickTrue(event) {this.setState({shown: true});}
  handleClickFalse(event) {this.setState({shown: false});}

  render() {
    let plusOrMinus;
    let answer;
    let testing;

    if (this.state.shown == false) {
      plusOrMinus = "fa fa-plus-square"
      testing = this.handleClickTrue
      answer = ''
    } else {
      plusOrMinus = "fa fa-minus-square"
      testing = this.handleClickFalse
      answer = this.props.data.answer
    }

    return(
      <div className="App">
        <h1 className="header">{`We're here to help`}</h1>
        <i onClick={testing} className={plusOrMinus} aria-hidden="true"></i>
        <p className="question">{this.props.data.question}</p>
        <p className="answer">{answer}</p>
      </div>
    )
  }
}

export default App;
