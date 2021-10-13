import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/logout'>Logout</Link>
      <Link to='/friends' style={{ marginRight: '16px'}}>
          See Friends
        </Link>
      <Link to='/friends/add-new'>Add Friend</Link>
      <Switch>
      {/* <PrivateRoute path='/friends/add-new' component={AddFriendForm} /> */}
      <PrivateRoute path='/friends' component={FriendsList} />
        <Route path="/login">
          <Login/>
        </Route>
        <Route>
            <Login />
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
