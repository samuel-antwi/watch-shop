import { useContext, useState, useReducer } from 'react';
import { ADD_TO_BASKET, ADD_TO_VIEWED_ITEMS } from 'types';
import productReducer from '../reducer/productReducer';
import { StateContext } from './stateContext';

export const StateProvider = ({ children }) => {
  const initialState = {
    basket: [],
    saved: [],
    viewedItems: [],
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [user, setUser] = useState(null);

  const addToBasket = (product) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: { product },
    });
  };

  const addToViewedItems = (product) => {
    dispatch({
      type: ADD_TO_VIEWED_ITEMS,
      payload: { product },
    });
  };

  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        viewedItems: state.viewedItems,
        user,
        addToBasket,
        addToViewedItems,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
