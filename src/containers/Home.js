import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar.js'
import KidContainer from './KidContainer.js'
import AddKidForm from './AddKidForm'
import WelcomeAddKids from '../components/WelcomeAddKids.js'
import KidInfo from './KidInfo.js'
import Chores from './Chores.js'
import {getStars} from '../actions/action.js'
import {submitForm} from '../actions/action.js'
import {getckss} from '../actions/action.js'
import {getKid} from '../actions/action.js'
import WOW from 'wow.js';

class Home extends Component {

state={
  toggle: false

}

componentDidMount() {
    const wow = new WOW();
    wow.init();

 }



buttonClick = () => {
  this.setState({
    toggle: true
  }
)
}





  render() {




    console.log("Home fired", this.props)

    if (this.props.choresSelected) {
      console.log("yes")
      return (

        <div>
        <Navbar/>

            <div className="home">
                        <Chores family={this.props.user} getChores={this.props.getChores}/>
        </div>


      </div>
      )
    }





    if (this.props.kidSelected) {

      console.log("yes")
      return (

        <div >

        <Navbar/>
            <div className="home">
                        <KidInfo getSelectedKid={this.props.getSelectedKid} isLoading={this.props.isLoading} getckss={this.props.getckss}  getck={this.props.getck} userKids={this.props.user.kids} chores={this.props.getChores} stars={this.props.stars} submitForm={this.props.submitForm}/>
        </div>

      </div>
      )
    }



    return (
      <div>
      <Navbar/>




          <div className="home">

{ this.props.user.kids.length > 0 ?
<div >
  <KidContainer />
</div>
:<div><WelcomeAddKids user={this.props.user}/>

{this.props.openKids &&
  <KidContainer />
}
  <div></div>


    </div>}






            <button  type="button" className="kidAddButton  btn btn-success btn-lg shadow-lg" onClick={this.buttonClick}>Add Names</button>
          <div className="AddKidForm" >

          {this.state.toggle &&
          <AddKidForm />
        }

        </div>
      </div>

    </div>



    );

  }

}
const mapStateToProps = (state) => {
  return {
    user: state.user,

    getSelectedKid: state.getSelectedKid,
    kidSelected: state.kidSelected,
    choresSelected: state.choresSelected,
    getChores: state.getChores,
    openKids: state.openKids



  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStars: () => dispatch(getStars()),
    getKid: () => dispatch(getKid())


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
