import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_KEY = 'userKey';

export const signup = async (email, password) => {
  const users = await AsyncStorage.getItem('users');
  let usersArray = users ? JSON.parse(users) : [];

  const userExists = usersArray.find(user => user.email === email);

  if (userExists) {
    throw new Error('User already exists');
  }

  usersArray.push({email, password});
  await AsyncStorage.setItem('users', JSON.stringify(usersArray));
};

export const login = async (email, password) => {
  const users = await AsyncStorage.getItem('users');
  let usersArray = users ? JSON.parse(users) : [];

  const user = usersArray.find(
    user => user.email === email && user.password === password,
  );

  if (!user) {
    throw new Error('Invalid email or password');
  }

  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getCurrentUser = async () => {
  const user = await AsyncStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const logout = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
