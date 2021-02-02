import { useContext, useState, useReducer } from 'react';
import { ADD_TO_BASKET } from 'types';
import productReducer from '../reducer/productReducer';
import { StateContext } from './stateContext';

export const StateProvider = ({ children }) => {
  const initialState = {
    basket: [],
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [user, setUser] = useState(null);

  const addToBasket = (product) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: { product },
    });
  };

  return (
    <StateContext.Provider value={{ basket: state.basket, user, addToBasket }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
