import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addChild} from '../actions/action.js'
import WOW from 'wow.js'

class AddKidForm extends Component {

state= {
  firstName: "",
  lastName: "",
  birthday:"",
  user_id: this.props.user.id,
  stars: [],


}

componentDidMount() {
    const wow = new WOW();
    wow.init();

 }

handleFormChange = (event) => {

  console.log(event.target.value);
  this.setState({
    [event.target.name]: event.target.value
  })
  console.log(this.state)
}


submitForm=(event) => {
  console.log("submitform fired")
  event.preventDefault()
  this.props.addChild(this.state)
  this.setState({
    firstName: "",
    lastName: "",
    birthday:""
  })
}


  render() {
    console.log("kidform",this.props.user.id)
    return (
      <div>






<form onSubmit={this.submitForm}>
  <div class="form-group shadow-lg p-3 mb-5 bg-white rounded border  wow bounceInUp">
    <label for="firstName">Add a Child</label>
    <input type="text" class="form-control" name="firstName" value={this.state.firstName}id="FirstName" aria-describedby="emailHelp" placeholder="First Name" onChange={this.handleFormChange}/>
    <input type="text" class="form-control" name="lastName" value={this.state.lastName}id="Lastname" aria-describedby="emailHelp" placeholder="Last Name" onChange={this.handleFormChange}/>
    <label for="birthday">Birthday</label>
    <input type="date" class="form-control" name="birthday" value={this.state.birthday} id="birthday" aria-describedby="emailHelp" placeholder="Birthday" onChange={this.handleFormChange}/>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>


</form>


      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChild: (state) => dispatch(addChild(state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKidForm);
