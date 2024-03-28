"use client";

import { useReducer, useState } from "react";
import { productReducer } from "./productReducer";
import { Product, ProductCategory } from "./types";

export default function ProductHome() {
  const [products, dispatch] = useReducer(
    productReducer,
    initialProductInventory
  );

  const defaultFormState = {
    id: "",
    name: "",
    category: ProductCategory.el,
    quantity: 0,
  };
  const [formValue, setFormValue] = useState<Product>(defaultFormState);

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleProductAddition = (e: any) => {
    e.preventDefault();
    console.log(formValue);
    const newProduct: Product = {
      ...formValue,
      id: crypto.randomUUID(),
    };
    dispatch({
      type: "ADD",
      pi: newProduct,
    });
    setFormValue(defaultFormState);
  };

  return (
    <article className="h-screen w-screen bg-slate-200">
      <div className="flex justify-evenly items-center">
        <div>
          <ProductForm
            handleFormChange={handleFormChange}
            formValue={formValue}
            handleProductAddition={handleProductAddition}
          />
        </div>
        <div className="overflow-y-auto max-h-96">
          <DisplayProducts products={products} />
        </div>
      </div>
    </article>
  );
}

const ProductForm = ({
  handleProductAddition,
  formValue,
  handleFormChange,
}: any) => {
  return (
    <form
      className="flex flex-col min-h-screen justify-center items-center gap-4 text-black"
      onSubmit={handleProductAddition}
    >
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          id="name"
          value={formValue.name}
          onChange={handleFormChange}
        />
      </label>

      <label>
        Select your category:
        <select
          name="category"
          id="category"
          value={formValue.category}
          onChange={handleFormChange}
        >
          <option value={ProductCategory.el}>Electronic products</option>
          <option value={ProductCategory.ap}>apparel products</option>
        </select>
      </label>

      <label>
        Add your quantity:
        <div className="flex gap-2">
          {/* <button
        className="bg-green-200 text-black text-md px-3 font-bold"
        onClick={handleFormChange}
      >
        -
      </button> */}
          <div>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={formValue.quantity}
              onChange={handleFormChange}
            />
          </div>
          {/* <div>
        <button
          className="bg-green-200 text-black text-md px-3 font-bold"
          onClick={handleFormChange}
        >
          +
        </button>
      </div> */}
        </div>
      </label>

      <button
        type="submit"
        className="bg-green-200 text-black text-md px-3 font-bold"
      >
        ADD
      </button>
    </form>
  );
};

const DisplayProducts = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products?.map((p) => (
        <div
          key={p.id}
          className="border border-blue-300 rounded-md p-4 mb-4 text-black font-mono"
        >
          <div>{p.id}</div>
          <div>{p.name}</div>
          <div>{p.category}</div>
          <div>{p.quantity}</div>
        </div>
      ))}
    </>
  );
};

const initialProductInventory: Product[] = [];
