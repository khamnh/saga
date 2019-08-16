export default function rootReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_ASYNC':
      return state = state + 1;
    case 'DECREMENT_ASYNC':
      return state = state - 1;
    default:
      return state;
  }
}