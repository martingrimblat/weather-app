import axios from 'axios';

export const getWeather = (city) => {
    return async dispatch => {
        try {
            const res = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=1f42be6ff9f747d8839211709221207&q=${city}&days=5`
                );
            dispatch({
                type: 'GET_CURRENT_WEATHER',
                payload: 
                    {
                     current: res.data.current,
                     location: res.data.location,
                     forecast: res.data.forecast  
                    }
            })
        } catch (err) {
            dispatch({
                type: 'WEATHER_ERR',
                payload: err.data
            })
        }
    }
}

export const switchToC = () => {
    return dispatch => {
        dispatch({
            type:'SWITCH_TO_CELSIUS',
            payload: 'CELSIUS'
        })
    };
}

export const switchToF = () => {
    return dispatch => {
        dispatch({
            type:'SWITCH_TO_FAHRENHEIT',
            payload: 'FAHRENHEIT'
        })
    };
}