 // const BASE_URL = "https://kids-reward-star-chart.herokuapp.com"
const BASE_URL = "http://localhost:3000/"
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


      dispatch({
        type: "GET_CKS", payload: res
      }
    )
    }
  )
  }
}


//--------------create cks ---------

export function submitForm(data,id) {


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

      if (res.status === 200) {

        dispatch(selectedKid(data.kidId))
        dispatch(getUserAgain(id))


       }

    })
  }
}



//---------------getStars-----------

export function getStars() {

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

      dispatch({
        type: "GET_STARS", payload: res
      })
    })

  }

}




//----------addChore---------------
export function addChore(choreName) {
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
      dispatch({
        type: "NEW_CHORE", payload: res
      })
    })

  }
}



// -------------create user
export function createUser(x) {
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

    alert("This email has been taken")
  }
})

}
}

//-------------------end-------------


export function logUserIn(data) {

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
  return (dispatch) => {
    dispatch({ type: 'GETTING_USER' });
  return fetch(`${BASE_URL}/api/v1/profile`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

    .then(res => res.json())

    .then(res =>  dispatch({type: 'GET_USER', payload: res
  }))
    }
}




//------------------

export function getUserAgain(id){
    let token = localStorage.getItem("token")
  return (dispatch) => {
      return fetch(  `${BASE_URL}/api/v1/users/${id}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
            Authorization: `Bearer ${token}`

        }

      })
    .then(res => res.json())

    .then(res => { dispatch({type: 'GET_USER_AGAIN', payload: res

  }
)
}
)

}
}

//-----------------addChild--------------


export function addChild(data) {

  let token = localStorage.getItem("token")
  return ( (dispatch) => {
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
        user_id: data.userId

      })
    })
    .then(res => res.json())

    .then(res => {

      dispatch({
        type:'CREATE_KID', payload: res
      })

    })

    }
  )
}

export function deslectUser() {
  return ((dispatch) => {
    dispatch({

      type: 'LOADING_CATS'

    })
  dispatch({

    type: 'DESELECT_USER', payload: false

  })
  })
}

export function deselectChore() {
  return ((dispatch) => {
  dispatch({
    type: 'DESELECT_CHORE', payload: false
  })
  })
}

//-------------------getKid--------------

// export const getKid=(id) =>{

//   return (dispatch) => {
//     dispatch({ type: 'GETTING_KID', payload: id });
//
//
//
//
//     }
// }

export const getKid=(id) =>{

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

  return (dispatch) => {
    dispatch({
      type: "LOG_USER_OUT", payload: {}
    })
  }
}
