import React from 'react';
import PostAnswer from './PostAnswer';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<PostAnswer/>)
})
