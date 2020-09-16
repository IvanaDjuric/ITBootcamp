import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import {Show} from './components/Show'
import {Search} from './components/Search'

const Nav = () => {
  return (
    <nav>
      <Link to="/">List Users</Link>
      <br></br>
      <Link to="/search">Search Users</Link>
    </nav>
  )
}

const App = () => {

  const [show,setShow] = useState([])
  const [filtered,setFiltered] = useState('')

  return(
    <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Show show={show} setShow={setShow}/>
        </Route>

        <Route path="/search">
          <Search filtered={filtered} setFiltered={setFiltered} show={show} setShow={setShow}/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);