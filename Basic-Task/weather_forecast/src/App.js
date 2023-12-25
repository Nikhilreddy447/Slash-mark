import './App.css';
//import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecaste from './components/Forecaste';
import getWeatherData from './services/weatherservice';
import getFormatedWeatherData from './services/weatherservice';
import { useEffect, useState } from 'react';

function App() {

  const [query,setQuery] = useState({q:'berlin'})
  const [units,setUnits] = useState('metrics')
  const [weather,setWeather] = useState(null)

  /*const fetchWeather = async()=>{
    const data = await getFormatedWeatherData({q:'london'})
    console.log(data)

  }

  fetchWeather()*/

  useEffect(()=>{
    const fetchWeather = async()=>{
      await getFormatedWeatherData({...query,...units}).then(data=>{
        setWeather(data);
      })
  
    }
  
    fetchWeather()
  },[query,units])

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeAndLocation />
          <TemperatureAndDetails />
          <Forecaste title="hourly forecast"/>
          <Forecaste title="Daily forecast"/>
        </div>
      )}

      
    </div>
  );
}

export default App;
