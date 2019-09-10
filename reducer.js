import { globalState } from 'globalState';
import { useReducer } from 'react';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return state;
  }
}
export { rootReducer }