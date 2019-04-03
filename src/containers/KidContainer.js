import React, { Component } from 'react';
import {connect} from 'react-redux'
import Kid from '../components/Kid.js'


class KidContainer extends Component{







        // let x = Object.values(this.props.userKids)
        // let val = () =>  this.props.userKids.map(kid => {
        //   return (<Kid id={kid.id} kid={kid} />)
        // })
render (){
    console.log("kidContainer fired", this.props)



    return (

      <div className="container kid_container  shadow-lg p-3 mb-5 bg-white rounded border " > <Kid /></div>


    );
}

}



export default KidContainer;
