import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getKid} from '../actions/action.js'
import ShowKidStars from './ShowKidStars.js'
import {getStars} from '../actions/action.js'
import {selectedKid} from '../actions/action.js'
import IsLoading from './IsLoading.js'
import KidInfo from '../containers/KidInfo.js'
import {getUserAgain} from '../actions/action.js'
import {deleteChild} from '../actions/action.js'



class Kid  extends Component  {

  state={
    deleteToggle: true,
    testing: true,

    showSorted: false,
    showSortedByName: false,
    originalArray: [...this.props.userKids],
    sortedArray: [],
    sortedArraybyAZ: []

  }


componentDidUpdate(prevProps) {
  if(this.props !== prevProps) {
    return true
  }
  else{
    return false
  }

}


  handleDeleteClick = (e) => {
    e.preventDefault()
		this.setState({
			 deleteToggle: !this.state.deleteToggle
		});


	}






handleSortByStarsClick = () => {
console.log("this",this)
  this.setState({
    showSorted: !this.state.showSorted
  })

let obj = [...this.props.userKids]

  obj.sort(function (a,b)  {// mutates the original: sort, splice, pop, shift

    return b.stars.length - a.stars.length
  })

  this.setState({
    sortedArray: obj
  })
}







handleClick = (event) => {
  this.props.selectedKid(event.target.id)
}


deleteChild = (e) => {
  this.props.deleteChild(e.target.id)
}



render() {

  let kid = () => {
     return <div><IsLoading /></div>
  }

  let kids = () => {
   let x = !this.state.showSorted ? this.props.userKids : this.state.sortedArray

    return x.map(kid => {
     return <table   className="table table-hover">

   <tbody>



   <tr>

   <th scope="row"></th>
   {this.state.deleteToggle ?
     null

   :   <button className="deleteText btn-xs btn btn-dark" id={kid.id} onClick={this.deleteChild}> Delete</button>
  }
   <td  id={kid.id} onClick={ event => this.handleClick(event)}> {kid.first_name} {kid.last_name}</td>


   <td>
   </td>


  <td>
  {kid.stars.map(stars => {

  return <img className="kidStars" src={stars.url} alt="star"/>})}

  </td>


   </tr>

   <tr>

   </tr>
   </tbody>

   </table>
   })

  }





  return (
<div>
{!this.props.isLoadingStars ? kids() : kid()}

<div>
        <button type="button" className="sortButton btn btn-outline-danger" onClick={this.handleSortByStarsClick}>{!this.state.showSorted ? "Sort by Stars" : "Unsort"}</button>

      </div>
      <button type="button" className ="btn btn-outline-danger" onClick={(e) => this.handleDeleteClick(e)}>
             {!this.state.deleteToggle ? 'Hide Delete' : 'Remove Names'}

           </button>
           <br></br>
</div>

)
}
}

const mapStateToProps = (state) => {
return {
  stars: state.stars,
user: state.user,
userKids: state.userKids,
stars: state.stars,
isMakingKid: state.isMakingKid,
isLoading: state.isLoading,

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

export default  connect(mapStateToProps, mapDispatchToProps)(Kid);
