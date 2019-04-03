import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import SignUp from './containers/SignUp.js'
import {Router, Switch, Route, NavLink} from 'react-router-dom'
import {getUser} from './actions/action.js'
import Login from './containers/Login.js'
import {connect} from 'react-redux'
import About from './components/About.js'

import Home from './containers/Home'
import WOW from 'wow.js'
import LogoAndTitle from './components/logoAndTitle.js'


class App extends Component {

state={
  loggedIn: false
}


  componentDidMount() {

    const wow = new WOW();
    wow.init();

    if (localStorage.token && Object.keys(this.props.user) < 1) {

    this.props.getUser(localStorage.token)
        this.setState({
          loggedIn: true
        })
      }




     }


  render() {
const isLoggedIn = this.props.loggedIn;
if (isLoggedIn) {
  return <Home />

}
else {


    return (
      <div className="App-header">

        <div>
        <Switch>
            <Route  path='/about/' component={About}/>
        <Route  path='/Login/' component={Login}/>
        <Route  path='/signup/' component={SignUp}/>
        <Route  exact path='/' component={SignUp}/>
        </Switch>
        </div>


      </div>
    );
  }
  }
}
const mapStateToProps = (state)=> {
  return {
    loggedIn: state.loggedIn,
    user: state.user,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps =(dispatch)=> {
    return {
      getUser: (token) => dispatch(getUser(token))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
