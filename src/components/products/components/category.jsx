import React from "react";
import axios from "axios";
import "../../../assets/style/category.scss";

export default class Category extends React.Component {
  state = {
    categories: [],
  };

 async componentDidMount() {
   await axios.get(`https://dummyjson.com/products/categories`).then((res) => {
      const categories = res.data;
      this.setState({ categories });
    });
  }

  render() {
    return (
      <ul className="category">
        {this.state.categories.map((categorie) => (
          <li>{categorie}</li>
        ))}
      </ul>
    );
  }
}
