import { Action, Product } from "./types";

export const productReducer = (
  products: Product[],
  action: Action
): Product[] => {
  switch (action.type) {
    case "ADD": {
      const { id, name, category, quantity } = action.pi;
      return [
        ...products,
        {
          id,
          name,
          category,
          quantity,
        },
      ];
    }
  }
};
