type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  AddToCart = "ADD_TO_CART",
  DeleteToCart = "DELETE_TO_CART",
  Add = "ADD_PRODUCT"
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductPayload = {
  [Types.AddToCart]: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  [Types.DeleteToCart]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.AddToCart:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image
        }
      ];
    case Types.DeleteToCart:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};
