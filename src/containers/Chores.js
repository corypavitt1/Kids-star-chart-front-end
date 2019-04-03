import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addChore} from '../actions/action.js'
import ChoresList from '../components/ChoresList.js'

class Chores extends Component {

state={
  addChoreButtonClicked: false,
  choreName: "",
  id: this.props.user.id
}

buttonClick = () => {
  this.setState({
    addChoreButtonClicked: true
  })
}

handleChange =(e) => {
  console.log(e.target.value)
  this.setState({
    choreName: e.target.value
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.addChore(this.state)
  this.setState({
    choreName:""
  })
}

  render() {
    console.log("Chores page", this.props.getChores)
    return (
      <div className="container kidinfo_container  shadow-lg p-3 mb-5 bg-white rounded border " >
      <div className="  container  shadow-lg p-3 mb-5 bg-white rounded border">
      <h1> The {this.props.family.family_name} Chores:
      </h1>
<ChoresList chores={this.props.getChores} user={this.props.user}/>

      </div>
      <div className="container  shadow-lg p-3 mb-5 bg-white rounded border">
      <form onSubmit={this.handleSubmit}>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" value={this.state.choreName} placeholder="Chore Name" onChange={event => this.handleChange(event)}/>
    </div>

    <button class="btn btn-primary" type="submit">Submit Chore</button>
  </div>
</form>



      </div>
      <button  type="button" className="kidAddButton  btn btn-success btn-lg shadow-lg" onClick={this.buttonClick}>+</button>







      </div>




    );
  }

}

const mapStateToProps =(state) => {
  return {

    user: state.user


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChore: (chore) => dispatch(addChore(chore))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chores);
