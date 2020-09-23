import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Home = () => {
  return (
    <p>HOME</p>
  )
}

const About = () => {
  return (
    <p>About</p>
  )
}
const Contact = () => {
  return (
    <p>Contact</p>
  )
}



const App = () => {

  //const [page,setPage] = useState(Home)
  
  return(
    <Router>
    
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>     
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about" render={() => <About />} />
      </Switch>

    {/* <nav>
      <button onClick={() => setPage(Home)}>HOME</button>
      <button onClick={() => setPage(About)}>About</button>
      <button onClick={() => setPage(Contact)}>Contact</button>
    </nav>
    {page} */}

</Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);