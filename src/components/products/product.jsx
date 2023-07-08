import React from "react";
import Category from "./components/category";
// import Products from "./components/products";
import "../../assets/style/product.scss";

class Product extends React.Component {
  render() {
    return (
      <div className="flex">
        <Category />
        {/* <Products /> */}
      </div>
    );
  }
}

export default Product;
