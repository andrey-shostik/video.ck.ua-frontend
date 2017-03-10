const initialState = {
  movies: []
};

export default function testReducer(state = initialState, action) {
  if (action.type === 'CONTENT_GET_SUCCESS') {
    console.log(action);
    return { movies: [{ movie: 'movie' }] };
  }

  return state;
}
