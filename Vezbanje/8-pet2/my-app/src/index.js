import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import ShipList from './ShipList'
import {getAllShips} from './services'
import Select from './Select'

const App = () => {
  const [ship,setShip] = useState([])

  useEffect(() => {
    getAllShips().then((res) => {
      setShip(res.data)
    })
  })
  return (
    <div>
      <Header />
      <Select />
      <ShipList arr={ship} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);