import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Question.css';
import NavBar from '../NavBar/NavBar';
import QuestionContext from '../../Context/QuestionContext';
import QuestionsApiService from '../../Services/questions-service';
import DepartmentApiService from '../../Services/department-api-service';

export class Question extends Component {
  // Call the API on componentwillmount
  // Specify the DOM element and element rendering the reuslt
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      questions: [],
      department: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let departmentList = [];
    DepartmentApiService.getDepartments().then((data) => {
      console.log(data);
      departmentList = data.map((department) => {
        return department;
      });
      console.log(departmentList);
      this.setState({
        department: departmentList
      });
    });
  }

  static contextType = QuestionContext;

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('successful submit question');
    const newQuestion = {
      question_body: e.target['question_body'].value,
      department_id: this.state.value
      // author: e.target.user_id,
      // e.target["department"].value,
    };
    console.log(newQuestion);

    QuestionsApiService.postQuestion(newQuestion.question_body, newQuestion.department_id)
<<<<<<< HEAD
      .then(() => this.props.history.push("/Dashboard"))
      .catch(this.context.setError);
    console.log(this.props.history)


=======
      .then(() => this.props.history.push('/Dashboard'))
      .catch(this.context.setError);
>>>>>>> d38e3dfaa50f4516378c867ecd849910d9e8a8aa
  };

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    console.log(this.state.department.map((department) => department.id));
    let departments = this.state.department;
    let departmentItems = this.state.department.map((department) => (
      <option value={department.id}>{department.name}</option>
    ));
    // let departmentItems = departments.map((department) =>
    //   <option key={department.name}>{department.name}</option>)
    return (
      <div className='askPage'>
        <NavBar />
<<<<<<< HEAD
        <form className="question form" onSubmit={e => this.handleSubmit(e)}>
          <fieldset>

            <br />
            <label htmlFor="input-one">question</label>
            <input
              className="form-control"
              type="text"
              name="question_body"
              value={this.state.question_body}
              onChange={this.handleSubmit}
              id="question"
              placeholder="ask...."
              onChange={e => this.setState({ questions: e.target.value })}
            />
            <br />
            <label htmlFor="input-one">department</label>
            <select value={this.state.value} onChange={e => this.handleChange(e)}>
              {departmentItems}
            </select>
            <br />
            <button
              type="submit"
            >
              ASK
            </button>
          </fieldset>
        </form>
        <Link to="/Dashboard">
          <button type="button">go back</button>
        </Link>
        <Link to="/answer">
          <button type="button">go look at all the answers</button>
        </Link>
=======
        <div className='Question'>
          <form className='question-form' onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset>
              <legend>Ask a Question</legend>
              <br />
              <div className='questBox'>
                <textarea
                  className='form-control'
                  type='text-area'
                  name='question_body'
                  value={this.state.question_body}
                  onChange={this.handleSubmit}
                  id='question'
                  placeholder='Type your question here...'
                  onChange={(e) => this.setState({ questions: e.target.value })}
                />
              </div>
              <br />
              <div className='departBox'>
                <label id='depa'>Department: </label>
                <select id='departSelect' value={this.state.value} onChange={(e) => this.handleChange(e)}>
                  {departmentItems}
                </select>
              </div>
              <br />
              <button type='submit'>Ask</button>{' '}
              <Link to='/Dashboard'>
                <button type='button'>Go Back</button>
              </Link>
            </fieldset>
          </form>
        </div>
>>>>>>> d38e3dfaa50f4516378c867ecd849910d9e8a8aa
      </div>
    );
  }
}

export default Question;
