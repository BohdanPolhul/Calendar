import { useState } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.scss';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Profile from './Component/Profile/Profile';

function App(props) {

  return (
    
    <div className=" h-100 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <BrowserRouter>
        <Header/>
        <div>
        <Route exact path="/" render={ () => <Profile props={props.state} dispatch={props.dispatch} />} />
        <Route exact path="/about" render={ () => <About/>} />
        </div>
       
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
