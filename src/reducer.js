// memo: initialState is how the data layer looks before we've added to it before anything  
export const initialState = {
  user: null,
};

// memo: acition is where we can push information into the data layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer
