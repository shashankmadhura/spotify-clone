export const initialState = {
  user: null,
  token: null ,
  playlist: [],
  workout: null,
  playing: false,
  item: null,
};

// action as type ,[payload]
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_WORKOUT":
      return {
        ...state,
        workout: action.workout,
      };
    default:
      return state;
  }
};
export default reducer;
