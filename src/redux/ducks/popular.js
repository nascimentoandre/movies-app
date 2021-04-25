// actions
export const GET_POPULAR = "GET_POPULAR";
const SET_POPULAR = "SET_POPULAR";

export const getPopular = () => ({
  type: GET_POPULAR
});

export const setPopular = (popular) => ({
  type: SET_POPULAR,
  popular: popular
});

// states
const initialState = {
  popular: undefined
}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR:
      const { popular } = action;
      return { ...state, popular: popular }
    default:
      return state;
  }
}