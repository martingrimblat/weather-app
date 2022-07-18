import React from 'react'
import { useSelector } from 'react-redux';

export const WeatherPic = () => {
  const weather = useSelector((state) => state);
  const { current, forecast, location } = weather.weather;
  
  return (
    <div>
      <img src="Clear.png"></img>
    </div>
  )
}
