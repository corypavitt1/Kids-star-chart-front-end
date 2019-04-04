import React, { Component } from 'react';

const ShowKidSelectedStars = props => {






              console.log("show Kid Selected Stars fired", this.props)
                let x = () => this.props.stars.map(star => {

                    return <img className="kidStars" src={star.url} alt=""/>



                  })
                              return (
                                  <div>{this.props.firstName}'s stars{x()}</div>
                                  );



}







export default ShowKidSelectedStars;
