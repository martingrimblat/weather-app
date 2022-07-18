import React, { useEffect, useState } from 'react';
import { WeatherPic } from './WeatherPic';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const Sidebar = () => {

    const weather = useSelector((state) => state);
    const scale = useSelector((state) => state.scale.scale)
    const { current, forecast, location } = weather.weather;

    const [isLoading, setLoading] = useState(true)
   
    const dispatch = useDispatch();
    const { getWeather } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
      getWeather('Rosario')
        .then(() => setLoading(false))
  
    },[]);

    const handleClick = () => {
      getWeather('Rosario')
    }
  
    if(isLoading){
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div className='sidebar-container flex-column'>
          <div className='btn-container flex-row'>
            <button onClick={() => handleClick()} className='search-btn text-light'> Search for Places</button>
            <button className='location-btn'><i className="bi bi-geo-alt-fill text-light"></i></button>
          </div>
            <img src={require(`../img/Cloud-background.png`)} className='cloud-background'  />
            <img src={require(`../img/${current.condition.text}.png`)} className='condition-img'  />
            <div className='temperature-displayer flex-row'>
              <h1 className='current-temp text-light'>
                {scale==='CELSIUS' ? current.temp_c : current.temp_f}
              </h1>
              <p className='scale-notation text-secondary'>
                {scale==='CELSIUS' ? '°C' : '°F'}
              </p>
            </div>
            <h2 className='current-condition text-secondary'>{current.condition.text}</h2>
            <p className='current-date text-secondary'>Today - {location.localtime}</p>
            <p className='current-location text-secondary'>{location.name}</p>
        </div>
      )
    }
}
