import React, { Component } from 'react';
import {connect } from 'react-redux'
import {createUser} from '../actions/action.js'
import WOW from 'wow.js';
import {  NavLink } from 'react-router-dom';
import LogoAndTitle from '../components/logoAndTitle.js'

class SignUp extends Component {

  state= {
    email: "",
    password: "",
    familyName: ""
  }



  componentDidMount() {
      const wow = new WOW();
      wow.init();

   }

  handleEmailChange = event => {
  console.log(event.target.value)
  this.setState({
    email: event.target.value
  })
}

handlePasswordChange = (event) => {
  console.log(event.target.value);
  this.setState({
    password: event.target.value
  })
}

handlefamilyNameChange = event => {
    console.log(event.target.value);
  this.setState({
    familyName: event.target.value
  })
}

handleSubmitForm = event => {
  event.preventDefault()
this.props.createUser(this.state)
this.setState({
  email:"",
  password:"",
  familyName:""
})
}

  render() {

      // console.log("render first", this.props);
      // if(this.props.loggedIn === true) {
      //   return <Login/>
      // }


    console.log(" rendering signup", this.props)
    return (
      <div>
<div className="signUpPage shadow-lg p-3 mb-5 bg-white rounded border wow bounceInUp " data-wow-offset="1"  data-wow-iteration="1">
<LogoAndTitle/>
      <form className="signUpForm" onSubmit={this.handleSubmitForm}>
      <p className="signup">Please Sign Up</p>
  <div className="form-group">

    <input type="email"  className="form-control" id="exampleInputEmail1" placeholder="Email" value={this.state.email} aria-describedby="emailHelp"  onChange={this.handleEmailChange}/>

  </div>

  <div className="form-group">

    <input type="password" className="form-control" value={this.state.password} id="exampleInputPassword1" onChange={this.handlePasswordChange} placeholder="Password"/>
  </div>

  <div className="form-group">

    <input type="name"  className="form-control" id="familyName1" placeholder="Family Name" value={this.state.familyName} aria-describedby="family_help"  onChange={this.handlefamilyNameChange}/>

  </div>



  <button type="submit" className="btn btn-primary">Submit</button>
  <hr></hr>
  <div><h6>
  Already have an account?
  <NavLink to="/login" className="text-muted stretch-link"> Login</NavLink>
</h6></div>
<div><h6>
Questions? Visit
<NavLink to="/about" className="text-muted stretch-link"> FAQ's</NavLink>
</h6></div>

</form>
</div>

</div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

const mapDipatchToProps = (dispatch) => {
return {
createUser: (x) => dispatch(createUser(x))
}
}

export default connect(mapStateToProps, mapDipatchToProps)(SignUp);
