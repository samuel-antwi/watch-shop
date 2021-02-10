import {
  ADD_TO_BASKET,
  ADD_TO_VIEWED_ITEMS,
  REMOVE_FROM_BASKET,
  INCREASE,
} from 'types';

// const Storage = (basket) => {
//   localStorage.setItem('cart', JSON.stringify(basket.length > 0 ? basket : []));
// };

export const sumItems = (basket) => {
  let itemCount = basket.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = basket
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const productReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    // Add to basket
    case ADD_TO_BASKET:
      if (
        !state.basket.find(
          (item) => item.product.id === action.payload.product.id
        )
      ) {
        state?.basket.push({
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
        basket: [
          ...state.basket.filter(
            ({ product }) => product.id !== action.payload
          ),
        ],
      };

    // INCREASE

    case INCREASE:
      state.basket[
        state.basket.findIndex(({ product }) => product.id === action.payload)
      ].quantity++;

      return {
        ...state,
        // ...sumItems(state.cartItems),
        basket: [...state.basket],
      };

    case 'DECREASE':
      state.basket[
        state.basket.findIndex(({ product }) => product.id === action.payload)
      ].quantity--;
      return {
        ...state,
        // ...sumItems(state.basket),
        basket: [...state.basket],
      };

    // Add to recently viewed items
    case ADD_TO_VIEWED_ITEMS:
      if (
        !state.viewedItems.find(
          (item) => item.product.node.id === action.payload.product.node.id
        )
      ) {
        state.viewedItems.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        viewedItems: [...state.viewedItems],
      };

    // Return default state
    default:
      return { ...state };
  }
};

export default productReducer;
