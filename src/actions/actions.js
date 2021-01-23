export const ACTIONS = {
  SET_USER_LOGGED: 'SET_USER_LOGGED',
  SET_REGISTERED_USER: 'SET_REGISTERED_USER',
  SET_ALL_REGISTERED_USERS: 'SET_ALL_REGISTERED_USERS',
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const registeredNewUser = (payload) => {
  return {
    type: ACTIONS.SET_REGISTERED_USER,
    payload
  }
};

const setUserLogged = (payload) => {
  return {
    type: ACTIONS.SET_USER_LOGGED,
    payload
  }
};

const setAllRegisteredUsers = (payload) => {
  return {
    type: ACTIONS.SET_ALL_REGISTERED_USERS,
    payload
  }
};

const setCurrentUser = (payload) => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    payload
  }
};


export {
  registeredNewUser,
  setUserLogged,
  setAllRegisteredUsers,
  setCurrentUser
}
