// import React from "react";
// import axios from "axios";
// import "../../../assets/style/products.scss";

// export default class Products extends React.Component {
//   state = {
//     products: {},
//   };

//   componentDidMount() {
//     axios.get(`https://dummyjson.com/products`).then((res) => {
//       const products = Object.values(res.data);
//       this.setState({ products });
//     });
//   }

//   render() {
//     return (
//       <div className="products">
//         {Object.values(this.state.products.map((product) => (
//           <h3>{`${product["price"]}`}</h3>
//         )))}
//       </div>
//     );
//   }
// }
