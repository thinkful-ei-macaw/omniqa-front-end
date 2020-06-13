import React from 'react';
import ReactDOM from 'react-dom';
import QuestionItem from './QuestionItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuestionItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
