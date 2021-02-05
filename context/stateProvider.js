import { useContext, useState, useReducer, useEffect } from 'react';
import { ADD_TO_BASKET, ADD_TO_VIEWED_ITEMS, REMOVE_FROM_BASKET } from 'types';
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
  const [durationNotification, setDurationNotification] = useState(true);
  const [showMiniBasket, setMiniBasket] = useState(false);

  // console.log(state.basket);

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

  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        viewedItems: state.viewedItems,
        user,
        addToBasket,
        addToViewedItems,
        durationNotification,
        setDurationNotification,
        showMiniBasket,
        setMiniBasket,
        removeFromBasket,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
// import { useContext, useState, useReducer } from 'react';
// import { ADD_TO_BASKET, ADD_TO_VIEWED_ITEMS, REMOVE_FROM_BASKET } from 'types';
// import productReducer from '../reducer/productReducer';
// import { StateContext } from './stateContext';

// export const StateProvider = ({ children }) => {
//   const initialState = {
//     basket: [],
//     saved: [],
//     viewedItems: [],
//   };
//   const [state, dispatch] = useReducer(productReducer, initialState);
//   const [user, setUser] = useState(null);
//   const [durationNotification, setDurationNotification] = useState(true);
//   const [showMiniBasket, setMiniBasket] = useState(false);

//   // Add product to basket
//   const addToBasket = (product) => {
//     window.scrollTo(0, 0);
//     dispatch({
//       type: ADD_TO_BASKET,
//       payload: { product },
//     });
//     setMiniBasket(true);
//     setDurationNotification(true);
//     setTimeout(() => setMiniBasket(false), 4000);
//     setTimeout(() => setDurationNotification(false), 40000);
//   };

//   // Add product to recently viewed items list
//   const addToViewedItems = (product) => {
//     dispatch({
//       type: ADD_TO_VIEWED_ITEMS,
//       payload: { product },
//     });
//   };

//   const removeFromBasket = (id) => {
//     dispatch({
//       type: REMOVE_FROM_BASKET,
//       payload: id,
//     });
//   };

//   return (
//     <StateContext.Provider
//       value={{
//         basket: state.basket,
//         viewedItems: state.viewedItems,
//         user,
//         addToBasket,
//         addToViewedItems,
//         durationNotification,
//         setDurationNotification,
//         showMiniBasket,
//         setMiniBasket,
//         removeFromBasket,
//       }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateProvider = () => useContext(StateContext);