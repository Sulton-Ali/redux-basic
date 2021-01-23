import React, {useEffect, useState} from 'react'
import './App.css';

import HomePage from './components/home-page';
import Header from "./components/header";
import {connect, useDispatch, useSelector} from "react-redux";
import {setAllRegisteredUsers, setCurrentUser, setUserLogged} from "./actions/actions";
import {
  getCurrentUserFromLStorage,
  getItem,
  getRegisteredUsers,
  setCurrentUserToLStorage,
  setItem
} from "./utils/localStorage";
import {Container} from "@material-ui/core";
import {Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from "./components/login-page";
import AuthPage from "./components/auth-page";
import CabinetPage from "./components/cabinet-page";


function App({ isLogged }) {

  const [ login, setLogin ] = useState('');

  const dispatch = useDispatch();
  const generateNavLinks = (isLogged) => {
    const navLinks = [
      {
        path: '/',
        text: 'Home'
      },
      {
        path: '/about',
        text: 'About'
      }
    ];

    if (isLogged) {
      navLinks.push({
        path: `/cabinet/${login}`,
        text: 'Cabinet'
      });
      navLinks.push({
        path: '/',
        text: 'Log out',
        clickHandler: () => {
          dispatch(setUserLogged(false));
          dispatch(setCurrentUser(''));
          setItem('isLogged', false);
          setCurrentUserToLStorage('');
        }
      })
    } else {
      navLinks.push({
        path: '/login',
        text: 'Log in'
      })
    }

    return navLinks
  };
  useEffect(() => {
    dispatch(setAllRegisteredUsers(getRegisteredUsers() || []));
    dispatch(setUserLogged(Boolean(getItem('isLogged') || false)));
    dispatch(setCurrentUser(getCurrentUserFromLStorage()));
    setLogin(getCurrentUserFromLStorage());
  }, []);

  return (
    <div className="App">
      <Header navLinks={generateNavLinks(isLogged)} />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cabinet/:id">
            <CabinetPage />
          </Route>
          <Route path="/login">
            { isLogged ? <Redirect to={`/cabinet/${login}`} /> : <LoginPage /> }
          </Route>
          <Route path="/auth">
            { isLogged ? <Redirect to={`/cabinet/${login}`} /> : <AuthPage /> }
          </Route>
        </Switch>
      </Container>

    </div>
  );
}

const mapStateToProps = ({ isLogged }) => {
  return {
    isLogged
  }
};

export default connect(mapStateToProps)(App);
