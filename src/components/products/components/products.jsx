import React from "react";
import axios from "axios";
import "../../../assets/style/products.scss";

export default class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      const { products } = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className="products">
        {this.state.products.map((product) => (
          <article className="box">
            <img src={product.thumbnail} alt="" />
            <div className="bottomImg">
              <p className="title">{product.title}</p>
              <p className="price">${product.price}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }
}
