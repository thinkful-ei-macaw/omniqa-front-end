import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DepartmentApiService from "../../Services/department-api-service";
import TokenService from "../../Services/TokenService";
import QuestionContext from "../../Context/QuestionContext";

export class Sidebar extends Component {
  static contextType = QuestionContext;

  constructor(props) {
    super(props);
    this.state = {
      department: [],
    };
  }
  //get info from token, and map over the question by user_id

  //clean up architecture

  componentDidMount() {
    let departmentList = [];
    DepartmentApiService.getDepartments().then((data) => {
      console.log(data);
      departmentList = data.map((department) => {
        return department;
      });
      console.log(departmentList);
      this.setState({
        department: departmentList,
      });
    });
  }

  // filterMyAskedQuestions = () => {
  //   const { user_id } = TokenService.readJwtToken();
  //   let myAskedQuesions = this.context.questionList.filter(
  //     (question) => question.author === user_id
  //   );
  //   this.context.setQuestionList(myAskedQuesions);
  // };

  //It loops through question_likes array and find the question in questionList by question_id
  //for a specific user_id (which you know how to obtained by using TokenService.readJwtToken();
  // and then set the liked attribute of the question to true.

  // filterMyLikedQuestions = () => {
  //   const { user_id } = TokenService.readJwtToken();
  //   let myLikedQuesions = this.context.questionList.filter(
  //     (question) => question.liked === user_id
  //   );
  //   this.context.setQuestionList(myLikedQuesions);
  // };

  filterMyLikedQuestions = () => {
    const { user_id } = TokenService.readJwtToken();
    let myLikedQuesions = this.context.questionList.filter(
      (question) => question.liked === user_id
    );
    this.context.setQuestionList(myLikedQuesions);
  };
  render() {
    return (
      <div className="Sidebar">
        <div className='Sidebar1'>
        <section className="myQs">
          <Link id="side__tag" to="/Dashboard">
            All Q&As
          </Link>
          <label>Q's that I...</label>
          <ul className="barUl">
            <li>
              <span onClick={() => this.props.filterAsked()} id="side__tag">
                Asked
              </span>
              {/* match to user_id answerwed: false/true */}
              {/* <Link id="side__tag" to="/asked">
                Asked
              </Link> */}
            </li>
            <li>
              <Link id="side__tag" to="/answered">
                Answered
              </Link>
            </li>
            <li>
              <span onClick={() => this.props.filterLiked()} id="side__tag">
                Liked
              </span>
            </li>
          </ul>
        </section>
        <section className="departments">
          <label>Departments</label>
          <ul className="barUl">
            <li>
              <span
                onClick={() => this.props.filterQuestions(null)}
                id="side__tag"
              >
                All tags
              </span>
            </li>
            {this.state.department.map((department) => (
              <>
                <li key={department.id}>
                  <span
                    id="side__tag"
                    onClick={() => this.props.filterQuestions(department.id)}
                  >
                    {department.name}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </section>
        </div>
        <div className="Sidebar2">
          <select>
            <option>All Q&As</option>
            <option disabled id="optionDis">
              Qs that I...
            </option>
            <option>Asked</option>
            <option>Answered</option>
            <option>Voted</option>
            <option>Liked</option>
            <option disabled id="optionDis">
              Departments
            </option>
            {this.state.department.map((department) => (
              <>
                <option>
                  <span
                    id="side__tag"
                    onClick={() => this.props.filterQuestions(department.id)}
                  >
                    {department.name}
                  </span>
                </option>
                <br />
              </>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;
