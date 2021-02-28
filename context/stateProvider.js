import { useContext, useState, useReducer, useEffect } from 'react';
import {
  ADD_TO_BASKET,
  ADD_TO_VIEWED_ITEMS,
  DECREASE,
  INCREASE,
  REMOVE_FROM_BASKET,
  REMOVE_FROM_SAVED_ITEMS,
  SAVE_FOR_LATER,
  CLEAR,
  CLEAR_RECENTLY_VIEWED,
} from 'types';
import productReducer from '../reducer/productReducer';
import { StateContext } from './stateContext';
import { useSnackbar } from 'react-simple-snackbar';

const initialState = {
  basket: [],
  viewedItems: [],
  saved: [],
};

export const StateProvider = ({ children }) => {
  const [openSnackbar] = useSnackbar();
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [durationNotification, setDurationNotification] = useState(true);
  const [showMiniBasket, setMiniBasket] = useState(false);
  const [showMiniAccount, setMiniAccount] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // Add product to basket
  const addToBasket = (product) => {
    window.scrollTo(0, 0);
    dispatch({
      type: ADD_TO_BASKET,
      payload: product,
    });
    setMiniBasket(true);
    setDurationNotification(true);
    setTimeout(() => setDurationNotification(false), 40000);
    setTimeout(() => setMiniBasket(false), 4000);
  };

  // Add product to recently viewed items list
  const addToViewedItems = (product) => {
    dispatch({
      type: ADD_TO_VIEWED_ITEMS,
      payload: product,
    });
  };

  // Clear recently viewed items
  const clearViewedItems = () => {
    dispatch({
      type: CLEAR_RECENTLY_VIEWED,
    });
  };

  // Remove from basket
  const removeFromBasket = (id) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: id,
    });
    openSnackbar('Item deleted');
  };

  // Remove fron saved items
  const removeFromSavedItems = (id) => {
    dispatch({
      type: REMOVE_FROM_SAVED_ITEMS,
      payload: id,
    });
    openSnackbar('Item removed!');
  };

  // Save item for later
  const saveForLater = (product) => {
    dispatch({
      type: SAVE_FOR_LATER,
      payload: product,
    });
    openSnackbar('Item saved for later');
  };

  // Increase item qty in basket
  const increase = (payload) => {
    dispatch({ type: INCREASE, payload });
    setMiniBasket(true);
    setTimeout(() => setMiniBasket(false), 4000);
  };

  // Decrease item qty in basket
  const decrease = (payload) => {
    dispatch({ type: DECREASE, payload });
  };

  // Check if an item is already saved for later
  const isSaved = (id) => {
    if (state.saved.find((product) => product.id === id)) {
      return true;
    }
  };

  // Check if an item is already in Basket
  const inBasket = (id) => {
    if (state.basket.find((product) => product.id === id)) {
      return true;
    }
  };

  const clearBasket = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        viewedItems: state.viewedItems,
        saved: state.saved,
        total: state.total,
        itemCount: state.itemCount,
        addToBasket,
        addToViewedItems,
        durationNotification,
        setDurationNotification,
        showMiniBasket,
        setMiniBasket,
        removeFromBasket,
        removeFromSavedItems,
        saveForLater,
        isDeleted,
        setIsDeleted,
        increase,
        decrease,
        isSaved,
        inBasket,
        clearBasket,
        clearViewedItems,
        showMiniAccount,
        setMiniAccount,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
// import { useContext, useState, useReducer, useEffect } from 'react';
// import {
//   ADD_TO_BASKET,
//   ADD_TO_VIEWED_ITEMS,
//   DECREASE,
//   INCREASE,
//   REMOVE_FROM_BASKET,
//   REMOVE_FROM_SAVED_ITEMS,
//   SAVE_FOR_LATER,
//   CLEAR,
//   CLEAR_RECENTLY_VIEWED,
// } from 'types';
// import productReducer from '../reducer/productReducer';
// import { StateContext } from './stateContext';
// import { useSnackbar } from 'react-simple-snackbar';

// const initialState = {
//   basket: [],
//   viewedItems: [],
//   saved: [],
// };

// export const StateProvider = ({ children }) => {
//   const [openSnackbar] = useSnackbar();
//   const [state, dispatch] = useReducer(productReducer, initialState, () => {
//     if (process.browser) {
//       const localData = localStorage.getItem('state');
//       return localData ? JSON.parse(localData) : null;
//     }
//     return {
//       basket: [],
//       viewedItems: [],
//       saved: [],
//     };
//   });
//   const [durationNotification, setDurationNotification] = useState(true);
//   const [showMiniBasket, setMiniBasket] = useState(false);
//   const [showMiniAccount, setMiniAccount] = useState(false);
//   const [isDeleted, setIsDeleted] = useState(false);

//   useEffect(() => {
//     window.localStorage.setItem('state', JSON.stringify(state));
//   }, [state]);

//   // Add product to basket
//   const addToBasket = (product) => {
//     window.scrollTo(0, 0);
//     dispatch({
//       type: ADD_TO_BASKET,
//       payload: product,
//     });
//     setMiniBasket(true);
//     setDurationNotification(true);
//     setTimeout(() => setDurationNotification(false), 40000);
//     setTimeout(() => setMiniBasket(false), 4000);
//   };

//   // Add product to recently viewed items list
//   const addToViewedItems = (product) => {
//     dispatch({
//       type: ADD_TO_VIEWED_ITEMS,
//       payload: product,
//     });
//   };

//   // Clear recently viewed items
//   const clearViewedItems = () => {
//     dispatch({
//       type: CLEAR_RECENTLY_VIEWED,
//     });
//   };

//   // Remove from basket
//   const removeFromBasket = (id) => {
//     dispatch({
//       type: REMOVE_FROM_BASKET,
//       payload: id,
//     });
//     openSnackbar('Item deleted');
//   };

//   // Remove fron saved items
//   const removeFromSavedItems = (id) => {
//     dispatch({
//       type: REMOVE_FROM_SAVED_ITEMS,
//       payload: id,
//     });
//     openSnackbar('Item removed!');
//   };

//   // Save item for later
//   const saveForLater = (product) => {
//     dispatch({
//       type: SAVE_FOR_LATER,
//       payload: product,
//     });
//     openSnackbar('Item saved for later');
//   };

//   // Increase item qty in basket
//   const increase = (payload) => {
//     dispatch({ type: INCREASE, payload });
//     setMiniBasket(true);
//     setTimeout(() => setMiniBasket(false), 4000);
//   };

//   // Decrease item qty in basket
//   const decrease = (payload) => {
//     dispatch({ type: DECREASE, payload });
//   };

//   // Check if an item is already saved for later
//   const isSaved = (id) => {
//     if (state.saved.find((product) => product.id === id)) {
//       return true;
//     }
//   };

//   // Check if an item is already in Basket
//   const inBasket = (id) => {
//     if (state.basket.find((product) => product.id === id)) {
//       return true;
//     }
//   };

//   const clearBasket = () => {
//     dispatch({ type: CLEAR });
//   };

//   return (
//     <StateContext.Provider
//       value={{
//         basket: state.basket,
//         viewedItems: state.viewedItems,
//         saved: state.saved,
//         total: state.total,
//         itemCount: state.itemCount,
//         addToBasket,
//         addToViewedItems,
//         durationNotification,
//         setDurationNotification,
//         showMiniBasket,
//         setMiniBasket,
//         removeFromBasket,
//         removeFromSavedItems,
//         saveForLater,
//         isDeleted,
//         setIsDeleted,
//         increase,
//         decrease,
//         isSaved,
//         inBasket,
//         clearBasket,
//         clearViewedItems,
//         showMiniAccount,
//         setMiniAccount,
//       }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateProvider = () => useContext(StateContext);
