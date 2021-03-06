export default function reducer(
    state = {
        user: [],
        isLoggingIn: false,
        loggedIn: false,
        isLoading: false,
        kids: [],
        userKids: [],
        getKid: [],
        kidSelected: false,
        choresSelected: false,
        getChores: [],
        stars: [],
        getSelectedKid: "",
        getck: [],
        isLoadingStars: false,
        isMakingKid: false,
        openKids: false,
        gettingUser: true,
        starOrder: true
                              }
                              ,action
) {

    switch (action.type) {
        case 'CREATE_USER':
        localStorage.clear()
        localStorage.setItem("token", action.payload.jwt)
            return {...state, user: action.payload.user, loggedIn: true}

            case 'GETTING_USER':
            return {...state, isLoading: true}

            case 'DESELECT_USER':
            return {...state, kidSelected: false}

            case 'DESELECT_CHORE':
            return {...state, choresSelected: false}

        case 'GET_USER':
            return {...state, user: action.payload.user, userKids:action.payload.user.kids, getChores:action.payload.user.chores, isLoading: false, loggedIn: true}

            case 'GET_USER_AGAIN':
                return {...state, userKids:action.payload.kids, isLoading: false, loggedIn: true}




        case 'LOADING_CATS':
            return {...state, isLoading: true}
        case 'LOGGING_IN':
        return {...state, isLoggingIn: true}

            case "LOADING_STARS":
            return {...state, isLoadingStars: true}

            case "LOADING_MAKING_KID":

            return {...state,
                isMakingKid: true}

            case 'CHORES_SELECTED_TRUE/FALSE':
            return {...state, choresSelected: !state.choresSelected}

        case "CREATE_KID":

        return {...state,

           userKids: state.userKids.concat(action.payload.kid),isMakingKid: false, openKids: true, }

          case "SELECTED_KID":
          return{...state,
          kidSelected: true, getSelectedKid: action.payload, isLoadingStars: false, isLoading: false }

        case "GETTING_KIDS":

        return{...state,

        userKids: action.payload, isLoading: false}
        // return {...state, userKids: action.payload}

        case "GET_CHORES":

        return {...state,
          choresSelected: true,
          getChores: action.payload,

        }

        case "GET_STARS":

        return {...state,
        stars: action.payload, isLoading: false}

        case "NEW_CHORE":

        return {...state,
        getChores: state.getChores.concat(action.payload.chore)
      }

      case "UPDATE_STORE":
    

        return {...state,
        userKids: "hello"
      }




        case "MAKE_CKS":

        return {...state,
        getck: state.getck.concat(action.payload.ck), isLoadingStars: false}

        case "GET_CKS":
        return {...state,
        getck: action.payload, isLoadingStars: false}

        case "LOG_IN_USER":
        localStorage.clear()
      localStorage.setItem("token", action.payload.jwt)
        return {...state, user: action.payload.user, userKids:action.payload.user.kids, getChores:action.payload.user.chores, loggedIn: true, isLoggingIn: false }

         case "DELETE_CHILD":

         let newKidsArray = state.userKids.filter(kid => kid.id !== parseInt(action.payload))

         return {...state, userKids: newKidsArray}

         case "LOG_USER_OUT":
         localStorage.clear()
         return {...state, loggedIn: false, user: action.payload, getchores:[]}



        default:
            return state;
    }


}
