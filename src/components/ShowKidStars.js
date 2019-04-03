import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getckss} from '../actions/action.js'
import {getStars} from '../actions/action.js'
import {getKid} from '../actions/action.js'
import IsLoading from './IsLoading.js'
import WOW from 'wow.js'

class ShowKidStars extends Component {

state={
  stars: this.props.stars
}

componentDidMount() {
    const wow = new WOW();
    wow.init();

 }

  render() {
    console.log("show kid stars",this.props)

    if(this.state.stars == undefined){
      console.log("yesss")

    this.setState({
      stars: []
    })
    console.log("after setState",this.state)
return <div><img className="kidStars" src={this.state.stars} alt="star"></img></div>
    }


let starCount = 0

let x = () => this.state.stars.map(stars => {
  console.log("yes 2")
   starCount = starCount + 1

  return <img className="kidStars" src={stars.url} alt="star"/>
})






    return (
      <div className=" wow pulse" data-wow-offset="1"  data-wow-iteration="1">


      <div>{x()}  YOU HAVE {starCount} {starCount ==1 ? "star": "stars"}</div>


      </div>
    )


}

}
const mapStateToProps = (state) => {
  return {

    isLoading: state.isLoading,
    isMakingKid: state.isMakingKid,
    userKids: state.userKids


  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    getckss: () => dispatch(getckss()),
    getStars: () => dispatch(getStars()),
    getKid: ()=> dispatch(getKid())  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(ShowKidStars);
