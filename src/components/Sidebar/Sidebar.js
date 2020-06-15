import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import DepartmentApiService from "../../Services/department-api-service";
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
    DepartmentApiService.getDepartments().then((data) => {
      this.setState({
        department: data,
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

determineFilter (type) {
  if (type === 'Asked') {
    this.props.filterAsked()
  } else if (type === 'Liked') {
    this.props.filterLiked()
  } else {
    this.props.clearFilters()
  }
}

  render() {
    // console.log('these are answers',this.context.answerList)
    return (
      <div className="Sidebar">
        <div className='Sidebar1'>
         <section className="departments">
          <label>Discover</label>
          <ul className="barUl">
            <li>
              <span className={this.props.filterUnansweredQs && "active"}
                onClick={() => this.props.filterUnansweredQs()}
                id="side__tag"
              >
                Unanswered Q's
              </span>
            </li>
          </ul>
        </section>
        <section className="myQs">
          <label>Q's that I...</label>
          <ul className="barUl">
            <li>
              <span style={{color: this.props.askedStatus ? '#785380' : 'grey', fontWeight: this.props.askedStatus ? '600' : '400'}} onClick={() => this.props.filterAsked()} id="side__tag">
                Asked
              </span>

            </li>
            <li>
              <span style={{color: this.props.likedStatus ? '#785380' : 'grey', fontWeight: this.props.likedStatus ? '600' : '400'}} onClick={() => this.props.filterLiked()} id="side__tag">
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
                id="side__tag">
                All Departments
              </span>
            </li>
            {this.state.department.map((department) => (
           
                <li key={department.id}>
                  <span style={{color: this.props.departmentStatus === department.id ? '#785380' : 'grey', fontWeight: this.props.departmentStatus === department.id ? '600' : '400'}}
                    id="side__tag"
                    onClick={() => this.props.filterQuestions(department.id)}
                  >
                    {department.name}
                  </span>
                </li>
            ))}
          </ul>
        </section>
        </div>
        <div className="Sidebar2">
          <select onChange={( {target: {value}}) => this.determineFilter(value)}>
            <option value="">
              Qs that I...
            </option>
            <option value="Asked">Asked</option>
            <option value="Liked">Liked</option>
            </select >
            <select onChange={( {target: {value}}) => value ? this.props.filterQuestions(+value) : this.props.clearFilters()}>
            
            <option value="">
              Departments
            </option>
            {this.state.department.map((department, i) => (
              
                <option key={i} value={department.id} >

                    {department.name}              
                </option>
                
  
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Sidebar;
