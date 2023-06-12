import React from 'react';
import logo from './logo.png';
import { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './App.css';

function App() {

  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: any) => {
    console.log(error);
  };

    return (
      <div className="App">
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} />  
      </div>
    );
}

export default App;
