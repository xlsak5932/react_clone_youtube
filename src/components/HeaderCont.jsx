import React from 'react';
import { Link } from 'react-router-dom';
// import {아이콘 이름} form "react-icon/이름(아이콘 맨앞에 글자 2개)"
import { AiFillYoutube } from 'react-icons/ai';
import { SearchBar } from './';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          AnGyonam youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
