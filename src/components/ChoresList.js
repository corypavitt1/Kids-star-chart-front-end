import React, {Component} from 'react';

const ChoresList= props => {





    console.log("choresList", props.chores)

     let allChores = () => props.chores.map(chore => {
      return <ul class="list-group" key={chore.id}>
  <li class="list-group-item" >{chore.name} ⭐️★☆⭐️</li>

</ul>
    })
    return (
    <div>{allChores()}</div>
    );


}

export default ChoresList;
