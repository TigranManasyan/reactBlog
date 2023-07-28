// import { NavLink, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Images from './components/Images/Images';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import NavBar from './components/NavBar/NavBar';
// import Error404 from './components/404';
// import Posts from './components/Posts/Posts';

// function App() {
//   return (
//     <div>
//       <NavBar />

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/posts' element={<Posts />} />
//         <Route path='/gallery' element={<Images />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='*' element={<Error404 />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


 
//  console.dir(AppContext)
// import { useContext } from "react";
// import { useState } from "react"; 
// import React from "react";

// export const appContext = React.createContext();

// const Child1_1 = () => {
//   const {n} = useContext(appContext);
//   console.log(n);

//   return (
//     <div>
//       <h2>Child 1.1</h2>
//     </div>
//   );
// }

// const Child1 = () => {
//   return (
//     <div>
//       <h2>Child 1</h2>

//       <hr />
//       <Child1_1 />
//     </div>
//   );
// }



// const App = () => {
//   const [n, setN] = useState(10);
//   return (
//     <div>
//       <appContext.Provider value = { {
//         n
//       } }> 
//         <h2>useContext Hook</h2>

//         <Child1 />
//       </appContext.Provider>
//     </div>
//   );
// }

// export default App;


import { useReducer } from "react";
import { appContext } from "./context"; 
import { reducer } from "./reducers";
import { initialState } from "./state";
import Counter from "./components/Counter/Counter"; 
const App = () => { 
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{state, dispatch}}>
      <div>
        <Counter />
      </div>
    </appContext.Provider>
  );
}
export default App;