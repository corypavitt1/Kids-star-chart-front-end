import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getKid} from '../actions/action.js'
import ShowKidStars from './ShowKidStars.js'
import {getStars} from '../actions/action.js'
import {selectedKid} from '../actions/action.js'
import IsLoading from './IsLoading.js'
import {getUserAgain} from '../actions/action.js'
import {deleteChild} from '../actions/action.js'



class Kid  extends Component  {

  state={
    deleteToggle: true
  }


  handleDeleteClick = () => {

		this.setState({
			 deleteToggle: !this.state.deleteToggle
		});


	}


shouldComponentUpdate(nextProps, prevState){
console.log("shouldComponentUpdate", prevState)
  if (this.props.userKids !== nextProps.userKids || this.state.deleteToggle !== prevState.deleteToggle){

    getUserAgain()

  return true
}
  else {

    return false
  }

}




handleClick = (event) => {

  this.props.selectedKid(event.target.id)
}

deleteChild = (e) => {
  console.log("fired delete", e.target.id)
  this.props.deleteChild(e.target.id)
}


render() {
  console.log("kid fired", this.props.userKids)


let   kids = () => this.props.userKids.map(kid => {
  if (this.props.user.id === kid.user_id) {

    return <table   className="table table-hover">

    <tbody>

    <tr>

    <th scope="row"></th>
    {this.state.deleteToggle ?
      null

    :   <button className="deleteText btn-xs btn btn-dark" id={kid.id} onClick={this.deleteChild}> Delete</button>
  }
    <td  id={kid.id} onClick={ event => this.handleClick(event)}> {kid.first_name} {kid.last_name}</td>
{!this.props.isLoading ?

    <td><ShowKidStars stars={kid.stars}  kid={kid}/></td>: <div><IsLoading/></div>}
    </tr>

    <tr>

    </tr>
    </tbody>
    </table>
  }
}
  )

    return (
      <div>
      <div>

      {kids()}
<hr></hr>



      </div>
      <button type="button" class="btn btn-outline-danger" onClick={this.handleDeleteClick}>
              {!this.state.deleteToggle ? 'Hide Delete' : 'Remove Names'}

            </button>
</div>






    );
}

}

const mapStateToProps = (state) => {
return {
  stars: state.stars,
user: state.user,
userKids: state.userKids,

isMakingKid: state.isMakingKid,
isLoading: state.isLoading
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKid: () => dispatch(getKid()),
    selectedKid:(id) => dispatch(selectedKid(id)),
    getStars: () => dispatch(getStars()),
    getUserAgain: () => dispatch(getUserAgain()),
    deleteChild: (id) => dispatch (deleteChild(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kid);
