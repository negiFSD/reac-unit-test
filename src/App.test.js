import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

/*
test('inputs should be intially empty', ()=>{
  render(<App/>);
  const emailInputValue = screen.getByRole("textbox");
  const passwordInputValue = screen.getByLabelText('password');
  const confirmPasswordInput = screen.getByLabelText('confirm Password');

  expect(emailInputValue.value).toBe('');
  expect(passwordInputValue.value).toBe('')
  expect(confirmPasswordInput.value).toBe('')
})
*/


test('user should be able to enter email', ()=>{
  render(<App/>)
     const emailInputAble = screen.getByRole("textbox",{
      name:/email/i
     });
     userEvent.type(emailInputAble, 'user@user.com');
     expect(emailInputAble.value).toBe('user@user.com')
})



// test('renders learn react link', () => {
//   // 1) rendering the component we want to test
//   render(<App />);
//   // 2) finding the element
//   const linkElement = screen.getByText(/learn react/i);
//   // 3) Assertion,  we can have multiple assertion 
//   expect(linkElement).toBeInTheDocument();
// });


// test ("description", ()=>{
//   render(<App/>);
//   const stinkElement = screen.getByText(/Edit/i);
//   expect(stinkElement).toBeInTheDocument()
// })