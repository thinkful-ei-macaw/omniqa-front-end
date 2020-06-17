import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import NavBar from "../NavBar/NavBar";
import QuestionContext from "../../Context/QuestionContext";
import QuestionsApiService from "../../Services/questions-service";
import DepartmentApiService from "../../Services/department-api-service";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      questions: [],
      department: [],
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let departmentList = [];
    DepartmentApiService.getDepartments().then((data) => {
      departmentList = data.map((department) => {
        return department;
      });
      this.setState({
        department: departmentList,
      });
    });
  }

  static contextType = QuestionContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = {
      question_body: e.target["question_body"].value,
      department_id: this.state.value,
      // author: e.target.user_id,
      // e.target["department"].value,
    };

    QuestionsApiService.postQuestion(
      newQuestion.question_body,
      newQuestion.department_id
    )
      .then(() => this.props.history.push("/Dashboard"))
      .catch(this.context.setError);
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    let departmentItems = this.state.department.map((department) => (
      <option value={department.id}>{department.name}</option>
    ));
    // let departmentItems = departments.map((department) =>
    //   <option key={department.name}>{department.name}</option>)
    return (
      <div>
        <NavBar />
        <div className="Question">
          <form
            className="question-form"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <fieldset>
              <h1>Ask a Question</h1>
              <div className="questBox">
                <textarea
                  className="form-control"
                  type="text"
                  name="question_body"
                  value={this.state.question_body}
                  onChange={this.handleSubmit}
                  id="question"
                  placeholder="Type your question here..."
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  onChange={(e) => this.setState({ questions: e.target.value })}
                />
              </div>
              <div className="controls">
                <div className="departBox">
                  <label id="depa">Select a Department: </label>
                  <select
                    id="departSelect"
                    value={this.state.value}
                    onChange={(e) => this.handleChange(e)}
                  >
                    {departmentItems}
                  </select>
                  <button className="ask-button" type="submit">
                    Ask
                  </button>{" "}
                </div>
              </div>
              <Link to="/Dashboard">Return to Dashboard</Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Question;
