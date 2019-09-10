import React, { createContext, useReducer } from 'react';
import { rootReducer } from './reducer';
import { globalState } from './globalState'
const Store = createContext();
const StoreProvider = (props) => {
  console.log('props--',props);
  const [state, dispatch] = useReducer(rootReducer, globalState);
  return <Store.Provider value='Hei'>{props.childern}</Store.Provider>
}
export { Store, StoreProvider }
