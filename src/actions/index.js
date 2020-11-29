export const setFavoriteVideo = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavoriteVideo = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
