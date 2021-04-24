// actions
export const GET_MOVIE = "GET_MOVIE";
const SET_MOVIE = "SET_MOVIE"

export const getMovie = () => ({
  type: GET_MOVIE
});

export const setMovie = (movie) => ({ //ver id
  type: SET_MOVIE,
  movie: movie
});

// states
const initialState = {
  movie: undefined
}

// reducers

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      const { movie } = action;
      return { ...state, movie: movie }
    default:
      return state;
  }
}