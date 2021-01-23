import {ACTIONS} from "../actions/actions";


const initialState = {
  isLogged: true,
  currentUser: null,
  registeredUsers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_LOGGED: {
      return {
        ...state, isLogged: action.payload
      }
    }

    case ACTIONS.SET_REGISTERED_USER: {
      return {
        ...state, registeredUsers: [...state.registeredUsers, action.payload]
      }
    }

    case ACTIONS.SET_ALL_REGISTERED_USERS: {
      return {
        ...state, registeredUsers: [...action.payload]
      }
    }
    default: return state;
  }
};

export default reducer;