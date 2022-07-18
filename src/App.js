import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import './App.css';
import { useEffect } from 'react';
import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar';

function App() {
  const state = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  const { getCurrentWeather } = bindActionCreators(actionCreators, dispatch);
  

  return (
    <div className="flex-row">
      <Sidebar />
      <Main /> 
    </div>
  );
}

export default App;
