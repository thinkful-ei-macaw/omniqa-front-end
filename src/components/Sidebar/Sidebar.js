import React, { Component } from 'react';
// import UserContext from '../../Context/UserContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import DepartmentApiService from "../../Services/department-api-service"

export class Sidebar extends Component {
  // static contextType = UserContext;

 constructor(props) {
   super(props);
   this.state = {
     department: []
   }
 }

componentDidMount() {
  let departmentList = [];
  DepartmentApiService.getDepartments()
    .then(data => {
      console.log(data)
      departmentList = data.map((department) => {
        return department
      });
      console.log(departmentList)
      this.setState({
        department: departmentList
      })
    })
}

  render() {
    // let questions = this.state.questionList.filter(question => {
    //   return question.department_id
    // })

    return (
      <div id='sideBars'>
      <div className='Sidebar'>
        <section className='myQs'>
          <Link id='side__tag' to='/Dashboard'>
            All Q&As
          </Link>
          <br />
          <br />
          <label>Q's that I...</label>
          <br />
          <ul className='barUl'>
            <li>
              <Link id='side__tag' to='/asked'>
                Asked
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/answered'>
                Answered
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='/voted'>
                Voted
              </Link>
            </li>
            <br />
            <li>
              <Link id='side__tag' to='liked'>
                Liked
              </Link>
            </li>
            <br />
          </ul>
        </section>
        <section className='departments'>
          <label>Departments</label>
          <br />
          <ul className='barUl'>
            <li>
              <span onClick={() => this.props.filterQuestions(null)} id='side__tag'>
                All tags
              </span>
            </li>
            <br />
            {this.state.department.map(department => (
       <>
      <li><span id='side__tag' onClick={() => this.props.filterQuestions(department.id)}>{department.name}</span></li> 
      <br/>
      </>
    ))}
          </ul>
        </section>
      </div>
      <div className='Sidebar2'>
        <select>
          <option>All Q&As</option>
          <option disabled id='optionDis'>Qs that I...</option>
          <option>Asked</option>
          <option>Answered</option>
          <option>Voted</option>
          <option>Liked</option>
          <option disabled id='optionDis'>Departments</option>
           {this.state.department.map(department => (
       <>
      <option><span id='side__tag' onClick={() => this.props.filterQuestions(department.id)}>{department.name}</span></option> 
      <br/>
      </>
    ))}
        </select>
      </div>
      </div>
    );
  }
}

export default Sidebar;
