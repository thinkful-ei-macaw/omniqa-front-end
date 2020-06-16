import React from 'react';
import QuestionList from './QuestionList';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<QuestionList/>)
})
