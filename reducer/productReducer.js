import { ADD_TO_BASKET, ADD_TO_VIEWED_ITEMS } from 'types';

const productReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
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
    default:
      return { ...state };
  }
};

export default productReducer;
