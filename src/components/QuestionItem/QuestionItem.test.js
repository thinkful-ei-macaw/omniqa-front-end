import React from 'react';
import QuestionItem from './QuestionItem';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<QuestionItem/>)
})
