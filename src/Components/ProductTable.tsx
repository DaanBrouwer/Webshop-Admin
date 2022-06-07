import React, { useEffect, useState } from "react";
import agent from "../agent";
import { Product } from "../Models/product";

function ProductTable() {
  const [products, setproducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.ProductList.list().then((products) => setproducts(products));
  }, []);

  return <div>ProductTable</div>;
}

export default ProductTable;
