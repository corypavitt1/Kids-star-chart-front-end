import React, { Component } from 'react';
import logo from '../images/logo.png';
import {connect} from 'react-redux'
import {getChores} from '../actions/action.js'
import {logUserOut} from '../actions/action.js'
import {choresSelected} from '../actions/action.js'
import {deslectUser} from '../actions/action.js'
import {deselectChore} from '../actions/action.js'

import { Redirect} from 'react-router-dom'
class Navbar extends Component {


  handleChoreClick = () => {

    this.props.choresSelected()
  }

  kidSelectedClick = () => {
    this.props.deslectUser()
    this.props.deselectChore()
  }


  handleSignOutClick = () => {

  this.props.logUserOut()

  }
  render() {

    return (


      <nav className=" navbar-brand d-flex">
        <div className="navbar-brand flex-fill nav-link" href="/home">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          My Star Chart

    <button class=" homeButton btn btn-primary btn-sm" href="/home"  onClick={this.kidSelectedClick}>      HOME</button>
           </div>
        <div className="navbar-brand text-center">
 {this.props.user.family_name} Family
</div>




              <button href="#" onClick={this.handleChoreClick} className="choresButton btn-lg btn-primary nav-link">Add Chores</button>




<button href="#" onClick={this.handleSignOutClick} className="logOutButton btn-lg btn-success">


                   Sign Out

                    </button>





      </nav>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getChores: () => dispatch(getChores()),
    choresSelected: () => dispatch(choresSelected()),
    logUserOut: () => dispatch(logUserOut()),
    deslectUser: () => dispatch(deslectUser()),
  deselectChore: () => dispatch(deselectChore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
