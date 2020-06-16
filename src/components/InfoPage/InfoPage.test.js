import React from 'react';
import InfoPage from './InfoPage';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<InfoPage/>)
})