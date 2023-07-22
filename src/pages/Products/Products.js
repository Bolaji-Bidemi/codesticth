import React from "react";
import Product from "./Product";
import { DUMMY_PRODUCTS } from "../../data";

const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          

          <li key={product.id}>
            <Product
              id={product.id}
              name={product.title}
              imgURL={product.image}
              price={product.price}
              category={product.category}
              rate={product.rating.rate}
              description={product.description}
            />
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default Products;
