const BASE_URL = "https://kids-reward-star-chart.herokuapp.com"
//----------choreslected true of false------

export function choresSelected() {
  return (dispatch) => {
    return dispatch({
      type: "CHORES_SELECTED_TRUE/FALSE"
    })
  }
}



//-----------getcks------------------

export function getckss() {
  console.log("get cks")
  let token = localStorage.getItem("token")
  return (dispatch) => {
      dispatch({ type: 'LOADING_STARS' });
    return fetch (`${BASE_URL}api/v1/cks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      },

    })
    .then(response => response.json())
    .then(res => {
      console.log("action getting cks", res)

      dispatch({
        type: "GET_CKS", payload: res
      }
    )
    }
  )
  }
}


//--------------create cks ---------

export function submitForm(data) {
  console.log("create stars and chores", data)

  let token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({ type: 'LOADING_STARS' });
    return fetch (`${BASE_URL}/api/v1/cks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      },
      body: JSON.stringify({
        kid_id: data.kidId,
        star_id: parseInt(data.starSelected),
        chore_id: parseInt(data.choreId),
        url: data.starSelectedSrc
      })
    })
    .then(response => response.json())
    .then(res => {
      console.log("action submit cks", data)
      dispatch(selectedKid(data.kidId))
    })
  }
}



//---------------getStars-----------

export function getStars() {
  console.log("getStars")
  let token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch (`${BASE_URL}/api/v1/stars`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      }
    })
    .then(response => response.json())
    .then(res => {
      console.log("getStars", res)
      dispatch({
        type: "GET_STARS", payload: res
      })
    })

  }

}




//----------addChore---------------
export function addChore(choreName) {
  console.log("addchore action", choreName)
  let token = localStorage.getItem("token")
  return (dispatch) => {
    return fetch (`${BASE_URL}/api/v1/chores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      },
      body: JSON.stringify({
        name: choreName.choreName,
        user_id: choreName.id
      })
    })
    .then(response => response.json())
    .then(res => {
      console.log("add chore response",res)
      dispatch({
        type: "NEW_CHORE", payload: res
      })
    })

  }
}



// -------------create user
export function createUser(x) {
  console.log("action fired create user",x)
  return (dispatch) =>{
    return fetch(`${BASE_URL}/api/v1/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: x.email,
      password: x.password,
      family_name: x.familyName
    }
  })
})
.then(res => res.json())
.then(user => {

  if (user.status === 200) {
    localStorage.setItem("token", user.jwt)


    dispatch({type: "CREATE_USER", payload: user})
    return true
  } else {

    alert(user.message)
  }
})

}
}

//-------------------end-------------


export function logUserIn(data) {
  console.log("body",data)

  return (dispatch) => {
      dispatch({ type: 'LOGGING_IN' });

  return   fetch(`${BASE_URL}/api/v1/login`, {
      method: 'POST',
      headers:{
       'Content-Type': 'application/json',
       'accept': 'application/json'
     },
     body: JSON.stringify({user : data})
   })

   .then(res => res.json())
   .then(res => {
     console.log("response",res)
     if (res.status === 200) {

  localStorage.setItem("token", res.jwt)

       dispatch({type: "LOG_IN_USER", payload: res})
       return true
     } else {
       alert(res.message)
     }
   })
 }
}

//----------getChores----------------

export function getChores() {
  console.log("get chore fired")
  let token = localStorage.getItem("token")
  return (dispatch) => {
    return fetch (`${BASE_URL}/api/v1/chores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      }
    })
    .then(response => response.json())
    .then(res => {
      console.log("getStars", res)
      dispatch({
        type: "GET_CHORES", payload: res
      })
    })

  }

}


//--------------getKids -----------------------
// export const getKids=(id) =>{
//
//   let token = localStorage.getItem("token")
//   return (dispatch) => {
//
//
//     return fetch(`http://localhost:3000/api/v1/kids`,{
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//
//     .then(response => response.json())
//     .then(json => {
//
//       console.log(json)
//       dispatch({
//           type: 'GET_KIDS', payload: json
//       })
//     })
//
//     .catch(function (json) {
//       console.log(json)
//
//
//     })
//
//   }
// }

//-------------get user -----------------------

export const getUser=(token) =>{
  console.log("getuser action");
  return (dispatch) => {
    dispatch({ type: 'GETTING_USER' });
  return fetch(`${BASE_URL}/api/v1/profile`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

    .then(res => res.json())

    .then(res => dispatch({type: 'GET_USER', payload: res
  }))
    }
}




//------------------

export function getUserAgain(id){
  console.log("getuseragain action", id)
    let token = localStorage.getItem("token")
    console.log("fired 2")
  return (dispatch) => {
    console.log("fired 3")
      return fetch(  `${BASE_URL}/api/v1/users/${id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
            Authorization: `Bearer ${token}`

        }

      })
    .then(res => res.json())

    .then(res => { dispatch({type: 'GET_USER', payload: res

  }
)
}
)

}
}

//-----------------addChild--------------

// export function addChild(data) {
//   console.log("addChild Action fired", data)
//   let token = localStorage.getItem("token")
//   return (dispatch => {
//   dispatch ({
//     type:"MAKING_KID"
//   });
//     return fetch("http://localhost:3000/api/v1/kids", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//           Authorization: `Bearer ${token}`
//
//       },
//       body: JSON.stringify({
//         first_name: data.firstName,
//         last_name: data.lastName,
//         birthday: data.birthday,
//         user_id: data.user_id,
//         stars: [{
//           url: [],
//         color: "",
//       id: "" }]
//
//       })
//     })
//     .then(response => response.json())
//     .then(res =>
//        dispatch ({
//       type: 'CREATE_KID', payload: res
//     }))
//   })
// }

export function addChild(data) {
  console.log("addChild Action fired", data)
  let token = localStorage.getItem("token")
  return (dispatch => {
  dispatch ({
    type:"LOADING_MAKING_KID"
  });
    return fetch(`${BASE_URL}/api/v1/kids`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
          Authorization: `Bearer ${token}`

      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        birthday: data.birthday,
        user_id: data.user_id

      })
    })
    .then(res => res.json())

    .then(res =>
      dispatch({
        type:'CREATE_KID', payload: res
      })

    )
    }
  )
}

//-------------------getKid--------------

// export const getKid=(id) =>{
//   console.log("getKID action", id);
//   return (dispatch) => {
//     dispatch({ type: 'GETTING_KID', payload: id });
//
//
//
//
//     }
// }

export const getKid=(id) =>{
  console.log("getKID action", id);
    let token = localStorage.getItem("token")
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch(`${BASE_URL}/api/v1/kids`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

      .then(res => res.json())

      .then(res =>

         dispatch({type: 'GETTING_KIDS', payload: res
    }))
      }
    }



    export const selectedKid=(id) =>{
      console.log("getK ID action", id);
        let token = localStorage.getItem("token")
      return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' });

        return fetch(`${BASE_URL}/api/v1/kids/${id}`,{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

          .then(res => res.json())

          .then(res =>

             dispatch({type: 'SELECTED_KID', payload:res
        }))
          }
        }


        export const deleteChild= (id) => {
          console.log("action fired", id)
            let token = localStorage.getItem("token")
            return (dispatch) => {

              return fetch(`${BASE_URL}/api/v1/kids/${id}`, {
                method: 'DELETE',
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
              .then ( res => res.json())
              .then(res =>
              dispatch({ type: "DELETE_CHILD", payload: id

              }))
            }
        }


export const logUserOut = () => {
  console.log("loguserout  fired")
  return (dispatch) => {
    dispatch({
      type: "LOG_USER_OUT", payload: {}
    })
  }
}
