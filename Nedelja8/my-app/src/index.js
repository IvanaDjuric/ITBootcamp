import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './Header'
import Select from './Select'
import {getAllLaunches} from './services'
import Launch from './Draw'

const App = () => {

  const [launch,setLaunch] = useState([])
  const [years,setYear] = useState('')

  useEffect(() => {
    getAllLaunches().then((res) => {
      setLaunch(res.data)
    })
  }, [])

  return(
    <>
  <Header />
  <Select setYear={setYear} />
  <Launch launch={launch} year={years} />
  </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);