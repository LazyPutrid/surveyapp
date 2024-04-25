import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';
import TestComponent1 from './Components/TestComponent1';
import LoginComponent from './Components/LoginComponent';
import useToken from './Components/useToken';


function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <LoginComponent setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/testcomponent1" element={<TestComponent1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
