import { useContext, useState, useReducer, useEffect } from 'react';
import {
  ADD_TO_BASKET,
  ADD_TO_VIEWED_ITEMS,
  DECREASE,
  INCREASE,
  REMOVE_FROM_BASKET,
} from 'types';
import productReducer from '../reducer/productReducer';
import { StateContext } from './stateContext';

const initialState = {
  basket: [],
  viewedItems: [],
  saved: [],
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [durationNotification, setDurationNotification] = useState(true);
  const [showMiniBasket, setMiniBasket] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  // useEffect(() => {
  //   window.localStorage.setItem('state', JSON.stringify(state));
  // }, [state]);

  // Add product to basket
  const addToBasket = (product) => {
    window.scrollTo(0, 0);
    dispatch({
      type: ADD_TO_BASKET,
      payload: { product },
    });
    setMiniBasket(true);
    setDurationNotification(true);
    setTimeout(() => setMiniBasket(false), 4000);
    setTimeout(() => setDurationNotification(false), 40000);
  };

  // Add product to recently viewed items list
  const addToViewedItems = (product) => {
    dispatch({
      type: ADD_TO_VIEWED_ITEMS,
      payload: { product },
    });
  };

  const removeFromBasket = (id) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: id,
    });
  };

  const increase = (payload) => {
    dispatch({ type: INCREASE, payload });
  };

  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload });
  };

  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        viewedItems: state.viewedItems,
        addToBasket,
        addToViewedItems,
        durationNotification,
        setDurationNotification,
        showMiniBasket,
        setMiniBasket,
        removeFromBasket,
        isDeleted,
        setIsDeleted,
        increase,
        decrease,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
