import {
  ADD_TO_BASKET,
  ADD_TO_VIEWED_ITEMS,
  REMOVE_FROM_BASKET,
  INCREASE,
  SAVE_FOR_LATER,
  REMOVE_FROM_SAVED_ITEMS,
  DECREASE,
  CLEAR,
} from 'types';

export const sumItems = (basket) => {
  let itemCount = basket.reduce((total, product) => total + product.quantity, 0);
  let total = basket
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const productReducer = (state, action) => {
  switch (action.type) {
    // Add to basket
    case ADD_TO_BASKET:
      if (!state.basket.find((item) => item.id === action.payload.id)) {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket],
      };

    // Remove from Basket
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        ...sumItems(state.basket.filter((item) => item.id !== action.payload)),
        basket: [...state.basket.filter((item) => item.id !== action.payload)],
      };

    case REMOVE_FROM_SAVED_ITEMS:
      return {
        ...state,
        saved: [...state.saved.filter((product) => product.id !== action.payload)],
      };

    // SAVE ITEM FOR LATER
    case SAVE_FOR_LATER:
      if (!state.saved.find((item) => item.id === action.payload.id)) {
        state?.saved.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        saved: [...state.saved],
      };

    // Increase basket quantity
    case INCREASE:
      state.basket[state.basket.findIndex((product) => product.id === action.payload)].quantity++;
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket],
      };

    // Decreasse basket quantity
    case DECREASE:
      state.basket[state.basket.findIndex((product) => product.id === action.payload)].quantity--;
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket],
      };

    // Add to recently viewed items
    case ADD_TO_VIEWED_ITEMS:
      if (
        !state.viewedItems.find((item) => item.product.node.id === action.payload.product.node.id)
      ) {
        state.viewedItems.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        viewedItems: [...state.viewedItems],
      };

    // Clear Basket
    case CLEAR:
      return {
        ...state,
        basket: [],
        ...sumItems([]),
      };

    // Return default state
    default:
      return { ...state };
  }
};

export default productReducer;
