import React from 'react';
import QuestionContainer from './QuestionContainer'

const App = (props) => {

  return (
    <div className="App">
      <QuestionContainer
        data={props.data}
      />
    </div>
  );
}

export default App;


// componentDidMount() {
// fetch('http://localhost:4567/api/v1/favorite_things.json')
// .then(response => response.json())
// .then((json) => this.setState({ data: json}))
// }
