import React from 'react';
import LandingPage from './LandingPage';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<LandingPage/>)
})
