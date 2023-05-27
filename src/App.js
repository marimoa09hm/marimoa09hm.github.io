import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Boysong from './boysong';
import Girlsong from './girlsong';
import Main from './Main';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/girlsong" element={<Girlsong />}></Route>
          <Route path="/boysong" element={<Boysong />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
