export const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.find((c) => c.code === action.payload.code)) return state;
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((c) => c.code !== action.payload.code);
    default:
      return state;
  }
};
