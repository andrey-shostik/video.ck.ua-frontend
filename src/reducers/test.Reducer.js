const initialState = {};

export default function testReducer(state = initialState, action) {
  if (action.type === 'TEST') {
    return { test: 'test' };
  }

  return state;
}
