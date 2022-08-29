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


test('user should be able to enter password', ()=>{
  render(<App/>)
  const paaswordInputByUser = screen.getByRole("textbox");
  userEvent.type(paaswordInputByUser, "asdfasdf")
  expect(paaswordInputByUser.value).toBe("asdfasdf")
})


// test('user should able to enter confirm Password', ()=>{
//   render(<App/>)
//   const confimPasswordInput = screen.getAllByRole("textbox",{
//     name:/confirm/i
//   })
//   userEvent.type(confimPasswordInput, "qswer")
//   expect(confimPasswordInput.value).toBe("qswer")
// })
 


/*-------------below is to check if user email is correct 
test('error message on invalid email',()=>{
  render(<App/>)
  const emailErrorElement = screen.queryByText(/the email you input is invalid/i)
  const emailInputElement = screen.getByRole('textbox',{
    name:/email/i,
  });
  const submitBtnElement = screen.getByRole("button",{
    name:/submit/i
  })
 expect(emailErrorElement).not.toBeInTheDocument()
 userEvent.type(emailInputElement,"dilip.com")
 userEvent.click(submitBtnElement)
 const erremailErrorElement = screen.queryByText(/the email you input is invalid/i)

 expect(erremailErrorElement).toBeInTheDocument()
})

*/


/*----- Below we are checking error text on screen if email is ok and password is short

test('error message if password is not accepted',()=>{
  render(<App/>)
  const passwordInput = screen.getByLabelText("password")
  const emailInput = screen.getByRole("textbox",{
    name:/email/i
   });
  const submitBtnElement = screen.getByRole('button',{
    name:/submit/i
  })
  userEvent.type(emailInput, 'asdf@asdf.com')
  userEvent.type(passwordInput,'Asdf')
  userEvent.click(submitBtnElement)
  const passwordErrorMessage = screen.queryByText(/password not accepted/)
  expect(passwordErrorMessage).toBeInTheDocument()
})
*/