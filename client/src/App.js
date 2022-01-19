import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import New from "./components/New";
import Ancient from './components/Ancient';
import Natural from './components/Natural';
import Quiz from './components/Quiz';
import Map from './components/Map';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersService from './services/UsersService';
import WondersService from './services/WondersService';

function App() {
  // Users state and functions
  const [users, setUsers] = useState([])
  const [formUser, setFormUser] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    UsersService.getUsers()
      .then(users => setUsers(users))
  }, []);

  useEffect(() => {
    if (!currentUser){
      checkIfRegistered()
    }
  }, [formUser])

  const addFormUser = (submittedUser) => {
    setFormUser(submittedUser)
  }

  const checkIfRegistered = () => {
    const foundUser = users.find(element => element.name == formUser.name);
    setCurrentUser(foundUser)
  }

  const createUser = (newUser) => {
    UsersService.postUser(newUser)
      .then(savedUser => setUsers([...users, savedUser]))
    setCurrentUser(newUser)
  }

  //Wonders state and functions

  const [wonders, setWonders] = useState([]);
  const [selectedWonder, setSelectedWonder] = useState(null);
  const [mapSelectedWonder, setMapSelectedWonder] = useState(null);


  useEffect(() => {
    WondersService.getWonders()
    .then(wonders => setWonders(wonders))
  }, []);

  const onWonderSelected = (wonder) => {
    setMapSelectedWonder(null)
    setSelectedWonder(wonder);
  };

  const onMapWonderSelected = (wonder) => {
    setSelectedWonder(null)
    setMapSelectedWonder(wonder);
  };

  const clearOnMapWonderSelected = () => {
    console.log("hello world");
    setMapSelectedWonder(null)
    setSelectedWonder(null)
    console.log("done");
  }

  return (

    <div className='background-img'>
      <Router>
        <>
          <Route exact path="/" render={() => {
            return <Home addFormUser={addFormUser} createUser={createUser} currentUser={currentUser} formUser={formUser} />
          }} />
          <Route exact path="/new" render={() => {
            return <New wonders={wonders} selectedWonder={selectedWonder} mapSelectedWonder={mapSelectedWonder} onWonderSelected={onWonderSelected} clearOnMapWonderSelected={clearOnMapWonderSelected} onMapWonderSelected={onMapWonderSelected}/>
          }} />
          <Route exact path="/ancient" render={() => {
            return <Ancient wonders={wonders} selectedWonder={selectedWonder} mapSelectedWonder={mapSelectedWonder} onWonderSelected={onWonderSelected} />
          }} />
          <Route exact path="/natural" render={() => {
            return <Natural wonders={wonders} selectedWonder={selectedWonder} mapSelectedWonder={mapSelectedWonder} onWonderSelected={onWonderSelected} />
          }} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/map" render={() => {
            return <Map onMapWonderSelected={onMapWonderSelected} wonders={wonders} />
          }} />
        </>
      </Router>

    </div>
  );
}

export default App;
