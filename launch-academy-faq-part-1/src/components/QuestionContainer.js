import React from 'react';
import Question from './Question'

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestionId: null
    }

    this.clickButton = this.clickButton.bind(this)
  }

  clickButton(id){
    if (id != this.state.selectedQuestionId){
    this.setState({selectedQuestionId: id})
    } else  {
    this.setState({selectedQuestionId: null})
    }
  }
  render() {

    let questionFragments = this.props.data.map(question =>{
      let button;
      let answer;
      if (question.id===this.state.selectedQuestionId) {
        button = "fa fa-minus-square toggleMinus"
        answer = question.answer
      } else {
        button = "fa fa-plus-square togglePlus"
        answer = null
      }

      return(
        <Question
          key={question.id}
          id={question.id}
          question={question.question}
          answer={answer}
          button={button}
          clickButton={this.clickButton}
        />
      )
    })

    return (
      <div className="QuestionContainer">
        {questionFragments}
      </div>
    );
  }
}

export default QuestionContainer;
