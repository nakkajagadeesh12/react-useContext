import React, { useReducer, useContext } from 'react';
import { Store } from './store';
const DataComponent = (props) => {
  const { state, dispatch } = useContext(Store);
  console.log('dispatch-->', dispatch);
  return <div>
    <button type='button' onClick={() =>
      dispatch({ type: 'SET_DATA' })
    }>Submit</button>
  </div >
}
export { DataComponent }