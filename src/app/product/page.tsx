"use client";

import { FormEvent, memo, useEffect, useReducer, useState } from "react";
import { productReducer } from "./productReducer";
import { Product, ProductCategory } from "./types";

export default function ProductHome() {
  const [products, dispatch] = useReducer(
    productReducer,
    initialProductInventory
  );

  const handleProductAddition = (formValue: Product) => {
    dispatch({
      type: "ADD",
      pi: formValue,
    });
  };

  return (
    <article className="h-screen w-screen bg-slate-200">
      <div className="flex justify-evenly items-center">
        <div>
          <ProductForm handleProductAddition={handleProductAddition} />
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
}: {
  handleProductAddition: (formValue: Product) => void;
}) => {
  const defaultFormState = {
    id: "",
    name: "",
    category: ProductCategory.el,
    quantity: 0,
  };
  const [formValue, setFormValue] = useState<Product>(defaultFormState);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setFormValue({
      ...formValue,
      quantity: count,
    });
  }, [count]);

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO handle errors and feedbacks
    // USE zod
    handleProductAddition({ ...formValue, id: crypto.randomUUID() });
  };

  return (
    <form
      className="flex flex-col min-h-screen justify-center items-center gap-4 text-black"
      onSubmit={(e) => handleFormSubmit(e)}
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
        {/* <button
          className="text-sm bg-green-400 rounded-lg px-2 m-2"
          disabled={count === 0}
          onClick={() => setCount((c) => c - 1)}
        >
          delete count
        </button>
        <button
          className="text-sm bg-green-400 rounded-lg px-2 m-2"
          onClick={(e) => {
            e.stopPropagation();
            setCount(count + 1);
          }}
        >
          Add count
        </button> */}
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={formValue.quantity}
          onChange={handleFormChange}
          // disabled
          className="text-right w-full px-3 rounded-md m-2"
        />
      </label>

      <button
        type="submit"
        className="bg-green-200 text-black text-md px-3 font-bold disabled:opacity-50"
        disabled={formValue.name === "" || formValue.quantity === 0}
      >
        ADD
      </button>
    </form>
  );
};

const DisplayProducts = memo(({ products }: { products: Product[] }) => {
  if (products.length === 0) {
    return (
      <>
        <div className="text-xl font-semibold text-black">
          Inventory is currently empty
        </div>
        <div className="text-xs text-center text-green-800">
          Add from the form in the left side{" "}
        </div>
      </>
    );
  }
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
          {/* <button>delete</button>
          <button>edit</button> */}
        </div>
      ))}
    </>
  );
});

const initialProductInventory: Product[] = [];
