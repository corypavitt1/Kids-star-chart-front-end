import React, {Component} from 'react';

class ChoresList extends Component {




render() {
    console.log("choresList", this.props.chores)

     let allChores = () => this.props.chores.map(chore => {
      return <ul class="list-group" key={chore.id}>
  <li class="list-group-item" >{chore.name} ⭐️★☆⭐️</li>

</ul>
    })
    return (
    <div>{allChores()}</div>
    );
}

}

export default ChoresList;
