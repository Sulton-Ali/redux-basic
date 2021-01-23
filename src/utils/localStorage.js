const setItem = (itemName, value) => {
  if (value) {
    localStorage.setItem(itemName, value);
  }
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


export {
  setItem,
  getItem,
  setRegisteredUsers,
  getRegisteredUsers
}