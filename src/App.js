
import './App.css';
import { Fragment } from 'react';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';
function App() {
  return (
   <Fragment>
    {/* <h1>Register here...</h1>
    <input type="text" placeholder='mobile...' />
    <br />
    <br />
    <input type="password" placeholder='password...' />
    <br />
    <br />
    <button>Submit</button> */}
   <Heading Heading="Register here..."/>
   <Input/>
   <br />
   <br />
   <Button button="Submit"/>


   </Fragment>
  );
}

export default App;
