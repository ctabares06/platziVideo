const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_FAVORITE':
      if (state.mylist.filter((video) => video.id === action.payload.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((video) => video.id !== action.payload),
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default: return state;
  }
};

export default reducer;
