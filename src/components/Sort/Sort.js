
import React, { Component } from "react";
import QuestionContext from "../../Context/QuestionContext";
import "./Sort.css";
import { Link } from "react-router-dom";

export class Sort extends Component {
  static contextType = QuestionContext;

  render() {
    return (
      <div className='Sort'>
        <section className='myQs'>
          <label id='sortLabel'>Sort:</label>
          <ul className='barUlSort'>
            <li>
              <Link id='side__tag' to='/Suggested'>
                Suggested
              </Link>
            </li>

            <li>
              <Link id='side__tag' to='/Newest'>
                Newest
              </Link>
            </li>
            <li>
              <Link id='side__tag' to='/MostVotes'>
                Most Votes
              </Link>
            </li>
            <li>
              <Link id='side__tag' to='/MostLiked'>
                Most Liked
              </Link>
            </li>
            <li>
              <Link id='side__tag' to='/MostActive'>
                Most Active
              </Link>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Sort;
