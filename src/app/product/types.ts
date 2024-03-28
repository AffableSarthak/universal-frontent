export enum ProductCategory {
  el = "ELECTRONICS",
  ap = "APPAREL",
}

export type Product = {
  id: string;
  name: string;
  category: "ELECTRONICS" | "APPAREL";
  quantity: number;
};

export type Action = { type: "ADD"; pi: Product };
