// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Home from './components/Home';
// import Form from './components/Form';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Msg from './components/Msg';
// import Increment from './components/Increment';
// import Reg from './components/Reg';
// import HookCounter1 from './components/HookCounter1';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';
// import Button from './components/Button';
// import Discount from './components/Discount';
// import EventBind from './components/EventBind';
// import UserGreeting from './components/UserGreeting';
// import UserGreeting1 from './components/UserGreeting1';
// import NameList from './components/NameList';
// import PostList from './components/PostList';
// import UserForm2 from './components/UserForm2';
// import HookCounter4 from './components/HookCounter4';
// import Contact from './components/Contact';
// import About from './components/About';
// import { Router as Router,Routes, Route,Link } from 'react-router-dom';
// import BmiCalculator from './components/BmiCalculator';
// import TextCaseConverter from './components/TestCaseConverter';

// function App() {
//   return (//props value:3
//     <div className="App">
//       <Home/>
//       {/* <NameList/> */}
//       {/* <PostList/> */}
//       {/* <HookCounter4/> */}
//       {/* <UserForm/> */}
//       {/* <UserForm2/> */}
//       {/* <TextCaseConverter/> */}
//       {/* <Contact primary={true}/> */}
//       {/* <About/>
//       <Router>
//       <nav>
//           <Link to='/'>Home</Link> &nbsp; &nbsp;
//           <Link to ='/about'>About Us</Link>  &nbsp; &nbsp;
//           <Link to ='/contact'>Contact Us</Link>  &nbsp; &nbsp;
//         </nav>
//         <Routes>
//           <Route path ='/' element={<About/>}></Route>
//           <Route path ='/about' element={<About/>}></Route>
//           <Route path ='/contact' element={<Contact/>}></Route>
//         </Routes>
//       </Router> */}
//       {/* <Button/> */}
//       {/* <Increment value={3}/> */}
//       {/* <HookCounter1/> */}
//       {/* <HookCounter2/> */}
//       {/* <HookCounter3 value={3}/> */}
//       {/* <Discount/> */}
//       {/* <EventBind/> */}
//       {/* <UserGreeting isLoggedIn={true}/> */}
//       {/* <UserGreeting1 isLogged={false}/> */}
//       {/* <Msg/> */}
//       {/* <Form/> */}
//       {/* <Welcome firstname = "Sanvi" lastname="Bhelkar" /> */}
//       {/* <Greet lastname ="Bhelkar" firstn ="Sanvi" />
//       <Greet firstname = "Tisha" lastname ="Murarka"/>
//       <Greet firstname = "Titiksha" lastname ="Agrawal"/>

//       <Greet empid = {111} ename ="Sanvi">
//         <p> This is the children props</p>
//         <button> Click me !</button>
//         </Greet>
//         <Greet> empid = {112}</Greet>
//       <h1>Good Morning</h1>
//       <p>Sanvi</p> */}
//       {/* register component */}
//       {/* <Reg name="Sanvi" age={19} dept="DS" pic={logo.svg}/>
//       <Reg name="Titiksha" age={20} dept="CS" pic={logo.svg}/>
//       <Reg name="Teena" age={20} dept="AIML" pic={logo.svg}/>
//       <Reg name="Tisha" age={21} dept="DS" pic="no image"/> */}
// {/* //       <BmiCalculator/> */}
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';

// import About from './components/About';

// import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
// import Customerlist from './components/Customerlist';
// import PostForm from './components/PostForm.js';
// import EditUser from './components/EditUser';

// function App() {
//   const Wrapper = (props) => {
//     const params = useParams();
//     return <EditUser {...{...props, match: {params}} } />
//   }
//   return (
//     <div className="App">     
//     <Router>
//       <div className='App'>
//         <nav>
//           <ul>
//             <Link to="/">Home</Link> &nbsp;&nbsp;
//             <Link to="/customers">All Customers</Link> &nbsp;&nbsp;
//             <Link to="/add-customer">Add Customer</Link> &nbsp;&nbsp;           
//             <Link to="/about">About Us</Link> &nbsp;&nbsp;            
//           </ul>
//         </nav>
//         <Routes>
//           <Route exact path="/" element={<About />}></Route>
//           <Route exact path="/customers" element={<Customerlist />}></Route>
//           <Route exact path="/add-customer" element={<PostForm />}></Route>
//           <Route exact path="/edit-customer/:id" element={<Wrapper />}></Route>
//           <Route exact path="/about" element={<About />}></Route>          
//         </Routes>
//       </div>

//     </Router>
      
//     </div>
//   );
// }

// export default App;

import { Provider } from "react-redux";
import store from "./redux_cake/store";

import React from "react";
import CakeContainer from "./redux_cake/CakeContainer";
import IceCreamContainer from "./redux_cake/IceCreamContainer";
import ItemContainer from "./redux_cake/ItemContainer";

function App(){
  return(
    <Provider store={store}>
      <div>
        <CakeContainer/>
        <IceCreamContainer/>
        <ItemContainer/>
        <ItemContainer cake/>
      </div>
    </Provider>
  )
}
export default App;