// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const add = (a, b) => {
  return a+b
}

test('should add up', ()=>{
const result = add(1,1)
expect(result).toBe(2)
})