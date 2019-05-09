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


    if(this.state.stars == undefined){


    this.setState({
      stars: []
    })

return <div><img className="kidStars" src={this.state.stars} alt="star"></img></div>
    }


let starCount = 0

let x = () => this.state.stars.map(stars => {

   starCount = starCount + 1

  return <img className="kidStars" src={stars.url} alt="star"/>
})






    return (
      <div className=" wow pulse" data-wow-offset="1"  data-wow-iteration="1">


      <div>{x()}</div>


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
