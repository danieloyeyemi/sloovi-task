import React from 'react';
import { Route,Routes } from 'react-router-dom'; 
import Login from './component/Login';
import './App.css';
import Task from './component/Task';

function App() {
  return (
    <>
   <Routes>
         <Route path='/' element={<Login/>}></Route>
         <Route path='/task' element={<Task/>}></Route> 
    </Routes> 
    </>
  );
}
export default App;