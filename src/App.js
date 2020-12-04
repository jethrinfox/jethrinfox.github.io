import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './components/Main';
import Navbar from './components/Navbar';
import './styles/styles.sass'


const App = () => {
  return (
    <div className="app">
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>



      </Router>
    </div>
  )
}

export default App
