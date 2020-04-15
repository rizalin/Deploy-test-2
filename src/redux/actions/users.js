import { GET_USERS, GET_USERS_PENDING } from '../const';

//Setup Action Redux INC
export const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export const getUsersPending = users => {
  return {
    type: GET_USERS_PENDING
  };
};
