import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/addFriendForm';

function App() {
  

  return (
    <Router>
    <div className="App">
      <ul>
      <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
        <li>
        <Link to='/friends' style={{ marginRight: '16px'}}>
          See Friends
        </Link>
        </li>
        <li>
          <Link to='/friends/add-new'>Add Friend</Link>
        </li>
      </ul>
      <Switch>
      <PrivateRoute path='/friends/add-new' component={AddFriendForm} />
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
