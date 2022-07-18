import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export const Main = () => {
  const scale = useSelector((state) => state.scale);
  const dispatch = useDispatch();
  const { switchToC, switchToF } = bindActionCreators(actionCreators, dispatch);


  return (
    <div>
      <button onClick={() => switchToF()}>F</button>
      <button onClick={() => switchToC()}>C</button>
    </div>
  )
}
