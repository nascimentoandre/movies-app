// actions
export const GET_QUERY = "GET_QUERY";
const SET_QUERY = "SET_QUERY";

export const getQuery = (str) => ({
  type: GET_QUERY,
  payload: str 
});

export const setQuery = (query) => ({ 
  type: SET_QUERY,
  query: query
});

// states
const initialState = {
  query: undefined
}

// reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      const { query } = action;
      return { ...state, query: query }
    default:
      return state;
  }
}