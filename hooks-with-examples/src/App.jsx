import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT : 'increment',
  DECREMENT : 'decrement',
  RESET : 'reset'
}
const initialState = {
  count : 0
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT: return { count: state.count + 1 };
    case ACTIONS.DECREMENT: return { count: state.count - 1 };
    case ACTIONS.RESET: return initialState;
    default: return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>
  );
}
