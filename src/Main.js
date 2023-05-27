import React, { useState } from 'react'
import logo from './logo.svg';
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {

  return (
    <>
        <div className='title'>한민고등학교 기상송 신청</div>
        <div className='sub-title'>기상송으로 듣고 싶은 노래를 신청해주세요!</div>
        <div className='arum-block'>
            <div className='arum-png'></div>
            <div className='arum-text'>
            <a>여자 기숙사</a> 
            <br></br>
            <a>기상송 신청하기</a>
            </div>
            <Link to="/girlsong">
                <div className='arum-button'></div>
            </Link>
        </div>
        <div className='maru-block'>
            <div className='maru-png'></div>
            <div className='maru-text'>
            <a>남자 기숙사</a> 
            <br></br>
            <a>기상송 신청하기</a>
            </div>
            <Link to="/boysong">
                <div className='maru-button'></div>
            </Link>
        </div>
        <div className='fnq'>이용방법이 궁금하다면?</div>
    </>
  );
}

export default Main;