import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ValueWorksheet } from './ValueWorksheet';

afterEach(cleanup)

test('should take a snapshot', () => {
  const { asFragment } = render(<ValueWorksheet />);

  expect(asFragment(<ValueWorksheet />)).toMatchSnapshot();
});


test('renders card with a value from values list', () => {});
