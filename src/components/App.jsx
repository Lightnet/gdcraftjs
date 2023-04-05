//import logo from './logo.svg';
//import styles from './App.module.css';

import { lazy } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';

import ThemeProvider from "./theme/ThemeProvider";
import NotifyProvider from "./notify/NotifyProvider"
import NotifyManager from './notify/NotifyManager';

import IndexMenus from "./IndexMenus";

import AuthProvider from "./auth/api/AuthProvider.jsx";
const SignIn = lazy(() => import('./auth/api/SignIn.jsx'))
const SignUp = lazy(() => import('./auth/api/SignUp.jsx'))
const SignOut = lazy(() => import('./auth/api/SignOut.jsx'))

const Home = lazy(() => import('../pages/index'))
const About = lazy(() => import('../pages/about'))
const TestLab = lazy(() => import('../pages/testlab'))
const Account = lazy(() => import('../pages/account'))

const RouterApp = () => {
  return (
  <Router>
    <IndexMenus/>
    <Routes>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/account" component={Account}/>
      <Route path="/testlab" component={TestLab}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/signout" component={SignOut}/>
    </Routes>
  </Router>);
};
// <Route path="/admin" component={PageAdmin}/>

function App() {

  //const wsc = new WebSocket('wss://localhost:3000');
  const wsc = new WebSocket('ws://localhost:3000');

  wsc.onmessage = (event) => {
    console.log(event)
    //document.getElementById('messages').innerHTML += 
    //  'Message from server: ' + event.data + "<br>";
  };

  wsc.addEventListener("open", () => {
    console.log("We are connected");
    wsc.send('hello')
  });

  return (<>
    <ThemeProvider>
      <NotifyProvider>
        <AuthProvider>
          <RouterApp/>
          <NotifyManager/>
        </AuthProvider>
      </NotifyProvider>
    </ThemeProvider>
  </>);
}

export default App;