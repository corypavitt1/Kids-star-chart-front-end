import React, { Component } from 'react';
import {connect } from 'react-redux'
import {logUserIn} from '../actions/action.js'
import WOW from 'wow.js';
import {Router, Switch, Route, NavLink} from 'react-router-dom'

class Login extends Component {

  state={
    username: "",
    password: ""
  }


  handleEmailChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmitForm = (event) => {

    this.props.logUserIn(this.state)
    this.setState({
      username: "",
      password: "",
    })
      this.props.history.push("/")
  }

  componentDidMount() {
      const wow = new WOW();
      wow.init();

   }


  render() {
    return (
      <div className="App-heaer">
      <div className="signUpPage shadow-lg p-3 mb-5 bg-white rounded border wow rubberBand " data-wow-offset="1"  data-wow-iteration="1">
            <form className="signUpForm" onSubmit={this.handleSubmitForm}>
            <p className="signup">Please Log In</p>
        <div className="form-group">

          <input type="text"  className="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.username} aria-describedby="emailHelp"  onChange={this.handleEmailChange}/>

        </div>

        <div className="form-group">

          <input type="password" className="form-control" value={this.state.password} id="exampleInputPassword1" onChange={this.handlePasswordChange} placeholder="Password"/>
        </div>




        <button href="/" type="submit" className="btn btn-primary">Submit</button>
        <hr></hr>
        <div><h6>
        Don't have an account?
        <a href="/signup"className="text-muted stretch-link"> Sign Up</a>
      </h6></div>

      </form>

      </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    isLoggingIn: state.isLoggingIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: (state) => dispatch(logUserIn(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
