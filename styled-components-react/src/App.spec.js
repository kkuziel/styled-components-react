import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const renderComponent = () => shallow(
  <App />,
);

test('renders without crashing', () => {
  expect(renderComponent()).toMatchSnapshot();
});
