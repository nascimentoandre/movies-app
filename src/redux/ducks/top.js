// actions
export const GET_TOP = "GET_TOP";
const SET_TOP = "SET_TOP";

export const getTop = () => ({
  type: GET_TOP
});

export const setTop = (top) => ({
  type: SET_TOP,
  top: top
});

// states
const initialState = {
  top: undefined
}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP:
      const { top } = action;
      return { ...state, top: top }
    default:
      return state;
  }
}