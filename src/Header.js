import React, { useState } from 'react'
import logo from './logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <>
        <Link to="/">
            <div className='jps' >JPS</div>
        </Link>
        <div className='login-button'>
            <a>로그인 및 회원가입</a>
        </div>
    </>
  );
}

export default Header;