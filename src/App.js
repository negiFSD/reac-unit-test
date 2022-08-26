// import logo from './logo.svg';
import './App.css';

function App() {




  // console.log('hello')
  return (
 <div className='container my-5 w-50 '>
  <form>
    <div className='md-3 '>
      <label htmlFor='email' className='form-label'>
        Email address
      </label>
      <input type="email"  id="email" name="email" className='form-control'></input>
      <label htmlFor='password' className='form-label'>
        password
      </label>
      <input type="password" id="password" name="password" className='form-control'></input>
      <label htmlFor='confirmPassword' className='form-label'>
        confirm Password
      </label>
      <input type="password" id="confirmPassword" name="confirmPassword" className='form-control'></input>

    </div>
    
  </form>
 </div>
  );
}

export default App;
