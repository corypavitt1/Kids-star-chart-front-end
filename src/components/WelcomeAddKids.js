import React, {Component} from 'react';

class  WelcomeAddKids extends Component{

render(){
    return (

      <h1 className="welcome">Welcome {this.props.user.family_name} family,  Lets add some Kids</h1>

    );

}
}

export default WelcomeAddKids;
