import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState(['Placement', 'Fees Structure', 'Faculty','About','Contact']);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleOptionClick = (option) => {
    // You can navigate to another page using the history object
    navigate(`/Card/${option}`);
  };

  return (
    <div >
      <input className=' border-black border-2 rounded-lg px-2 py-1 mt-2 mr-2' type="text" placeholder="     Search Here" value={searchTerm} onChange={handleSearch} />
      <ul>
        {searchTerm&& options
          .filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              <div className='cursor-pointer'>{option}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;