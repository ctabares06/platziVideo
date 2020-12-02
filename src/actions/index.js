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

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const setUserData = (payload) => ({
  type: 'USER_REGISTER',
  payload,
});

export const setPlayingVideo = (payload) => ({
  type: 'SET_PLAYING',
  payload,
});
