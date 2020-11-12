import React, { useState } from 'react';

import './App.css';
import Login from './Login';
import Sidebar from './Sidebar';

import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Chat  from "./Chat";
import { useStateValue} from "./StateProvider";

function App() {
const [{ user},dispatch ] = useStateValue();

  return (
    //BEM Naming convention
    <div className="app">
      
      { ! user ? (
 <Login />
      ) :(
    
      <div className="app_body">
        <Router>
       
           
            <Sidebar />
            <Switch>
            <Route path= "/rooms/:roomId">
            <Chat />
            </Route>
       <Route path= "/">
      <Chat />
      </Route>
      
      </Switch> 
       </Router>
      </div>
      )}
    </div>
      
  );
}
export default App;