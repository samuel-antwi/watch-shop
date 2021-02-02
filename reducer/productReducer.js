import { ADD_TO_BASKET } from 'types';

const productReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return { ...state };
  }
};

export default productReducer;
