import React, { Component } from 'react';

const ShowKidSelectedStars = props => {






          
                let x = () => props.stars.map(star => {

                    return <img className="kidStars" src={star.url} alt=""/>



                  })
                              return (
                                  <div>{props.firstName}'s stars{x()}</div>
                                  );



}







export default ShowKidSelectedStars;
