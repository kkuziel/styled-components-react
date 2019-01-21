import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

const renderComponent = ({
  bottomColor = undefined,
  topColor = undefined,
}) => shallow(
  <Heading
    bottomColor={bottomColor}
    topColor={topColor}
  />,
);

test('renders correct HTML with default colors', () => {
  expect(renderComponent({})).toMatchSnapshot();
});

test('renders correct HTML with custom colors', () => {
  expect(renderComponent({ bottomColor: '#F90', topCollor: '#09F' })).toMatchSnapshot();
});
