import React, { Component } from 'react';

import {connect} from 'react-redux'
import image from '../images/stars/RedStarWhite.png'
import imageRedStarSmile from '../images/stars/RedStarSmile.png'

import {getStars} from '../actions/action.js'
import {submitForm} from '../actions/action.js'
import {getckss} from '../actions/action.js'
import {getKid} from '../actions/action.js'
import ShowKidSelectedStars from '../components/ShowKidSelectedStars.js'
import IsLoading from '../components/IsLoading.js'


class KidInfo extends Component {

  componentDidMount(){ //This gets all pre-made stars
console.log("kidinfo did mount fired",)
    this.props.getStars()


  }


  state= {
    starSelected: [],
    starSelectedSrc: "",
    choreSelected: [],
    choreId: [],
kidId: this.props.getSelectedKid.id
  }


 playSound =() =>{

   const audio = new Audio("https://kids-star-chart.herokuapp.com//Audio/kidsCheering.mp3")
   audio.play()
  }

starSelected = (e) => {
this.setState({
  starSelected: e.target.id,
  starSelectedSrc: e.target.src
})

}

submitForm = (e) => {
  console.log("submit form",this.state)
  e.preventDefault()
  this.playSound()
  this.props.submitForm(this.state)

  this.setState({
    starSelected: [],
    starSelectedSrc: [],
    choreSelected: [],
    choreId: [],

  })
}

handleSelectedChore = (e) => {

  console.log("selected Chore", e.target.value)
  this.setState({
    choreSelected: e.target.name,
    choreId: e.target.value
  })
}



  render() {
    console.log("kidinfo fired", this.props)








    let showChores = () => this.props.chores.map(chore => {
      return <option  key={chore.id} value={chore.id} name={chore.name}   >{chore.name}</option>
    })














    let showStars = () => this.props.stars.map(star => {


      return <img className=" showStars list-group-horizontal list-group-item-action list-group-item-action"  key={star.id} id={star.id} src={star.url} alt="star" onClick={(e) => this.starSelected(e)}/>
    })

    return (

      <div className="container kidinfo_container  shadow-lg p-3 mb-5 bg-white rounded border " >
      <div className="letsGetStars  container  shadow-lg p-3 mb-5 bg-white rounded border">
      <h1>Lets get {10 - this.props.getSelectedKid.stars.length } more stars!

      </h1>

      <h3 className="starEqualAward">{10 - this.props.getSelectedKid.stars.length } stars = AWARD</h3>
      </div>


      <div className="container kid_container  shadow-lg p-3 mb-5 bg-white rounded border " >{this.props.getSelectedKid.first_name}, GET YOUR STARS HERE:
{this.state.choreSelected.length | this.state.starSelected.length > 0 &&
      <div className="whatsSelected rounded-lg">
      <img className="selectedStar" src={this.state.starSelectedSrc} alt={this.state.starSelected}/> {this.state.choreSelected}
      </div>
    }

      <form onSubmit={this.submitForm}>

        <div class="form-group">

        {this.props.chores < 1 ?
          <label for="chooseYourChore">You need to add some chores! Click Add Chores above.</label>:
          <label for="chooseYourChore">Choose your chore:</label>
}

          <select class="form-control"  onChange={(e)=>this.handleSelectedChore(e)}>
          <option>

          </option>

          {showChores()}


          </select>
        </div>





<div className="star">
        {showStars()}

        </div>






        <button className="btn btn-primary">Submit Your Star!</button>
      </form>




      </div>

{!this.props.isLoadingStars ?
<h2 className="container  kidinfo_container  shadow-lg p-3 mb-5 bg-white rounded border ">
  <ShowKidSelectedStars  firstName={this.props.getSelectedKid.first_name} stars={this.props.getSelectedKid.stars} /></h2>
  : <IsLoading />
}
      </div>


    );

}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,


    kidSelected: state.kidSelected,
    choresSelected: state.choresSelected,
    getSelectedKid: state.getSelectedKid,
    getChores: state.getChores,
    isLoading: state.isLoading,
    isLoadingStars: state.isLoadingStars,
    stars: state.stars,
    getck: state.getck
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStars: () => dispatch(getStars()),
    submitForm: (data) => dispatch(submitForm(data)),
    getckss: () => dispatch(getckss()),
    getKid: ()=> dispatch(getKid())  }
}

export default connect(mapStateToProps,mapDispatchToProps)(KidInfo);
