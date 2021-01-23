const setItem = (itemName, value) => {
  localStorage.setItem(itemName, value);
};

const getItem = (itemName) => {
  return localStorage.getItem(itemName);
};

const getRegisteredUsers = () => {
  return JSON.parse(localStorage.getItem('registeredUsers'))
};

const setRegisteredUsers = (user) => {
  const registeredUsers = getRegisteredUsers() || [];
  registeredUsers.push(user);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
};

const setCurrentUserToLStorage = (value) => {
  localStorage.setItem('currentUser', value);
};

const getCurrentUserFromLStorage = () => {
  return localStorage.getItem('currentUser');
};


export {
  setItem,
  getItem,
  setRegisteredUsers,
  getRegisteredUsers,
  setCurrentUserToLStorage,
  getCurrentUserFromLStorage
}
