const reducer = (state = {location:{}, current: {}, forecast: []}, action) => {
    switch(action.type){
        case 'GET_CURRENT_WEATHER':
            return {
                ...state,
                location: action.payload.location,
                current: action.payload.current,
                forecast: action.payload.forecast
            };
        
        case 'WEATHER_ERR':
            return {
                ...state,
                error: action.payload
            };

        default: return state;
    }
}

export default reducer;