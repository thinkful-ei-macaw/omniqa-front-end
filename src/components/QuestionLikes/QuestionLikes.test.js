import React from 'react';
import QuestionLikes from './QuestionLikes';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<QuestionLikes/>)
})
