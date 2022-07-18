import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const SearchPlaces = () => {
  const [city, setCity] = useState();
  const [recentSearchs, setRecentSearchs] = useState([]);

  const dispatch = useDispatch();
  const { getWeather } = bindActionCreators(actionCreators, dispatch);

  const handleRecent = () => {
    
  }
  return (
    <div>
      <button className='close-btn'>X</button>
      <input className='search-input' value='search location' />
      <button className='search-btn'>Search</button>
      <ul>
        {recentSearchs.map((search) =>{
          <li>
            <button className='recent-city' onClick={handleRecent}>{search}</button>
          </li>
        })}
      </ul>
    </div>
  )
}
