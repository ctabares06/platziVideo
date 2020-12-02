export const setFavoriteVideo = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavoriteVideo = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

export const setUserData = (payload) => ({
  type: 'USER_REGISTER',
  payload,
});
