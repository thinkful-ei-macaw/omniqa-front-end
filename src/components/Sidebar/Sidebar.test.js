import React from 'react';
import Sidebar from './Sidebar';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Sidebar/>)
})