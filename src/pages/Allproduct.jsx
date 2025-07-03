import React, { useState } from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import CollectionP from "../components/molecules/CollectionP";
import ProducList from "../components/molecules/ProducList";

import products from "../data/products";

export default function Allproduct() {
  const [productsState, setProductsState] = useState(products);

  const addProduct = (product) => {
    setProductsState((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProductsState((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, ...updatedProduct } : prod
      )
    );
  };

  const deleteProduct = (id) => {
    setProductsState((prev) => prev.filter((prod) => prod.id !== id));
  };

  return (
    <HomeLayouts>
      <CollectionP />
      <ProducList
        products={productsState}
        onAdd={addProduct}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </HomeLayouts>
  );
}
