import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  shallow(<App/>)
})
