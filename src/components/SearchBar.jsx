import React, { useState } from 'react';
import { BsSearchHeart } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, SetSearchTerm] = useState('');
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
      console.log('if handl');
    } else {
      console.log('else handl');
    }
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`./search/${searchTerm}`);
      SetSearchTerm('');
      console.log('if');
    } else {
      console.log('else');
    }
  };

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <BsSearchHeart />
      </label>

      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="코딩 유튜버를 검색하세요"
        title="검색"
        onChange={(e) => {
          console.log(e.target.value);
          SetSearchTerm(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
