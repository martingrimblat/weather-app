const reducer = (state={scale:'CELSIUS'}, action) => {
    switch(action.type){
        case 'SWITCH_TO_FAHRENHEIT':
            return {
                ...state,
                scale: action.payload
            };
        case 'SWITCH_TO_CELSIUS':
            return {
                ...state,
                scale: action.payload
            }
        default: return state;
    }
}

export default reducer;