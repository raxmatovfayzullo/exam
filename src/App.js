import Navbar from "./components/navbar";
import "./assets/style/local.scss";
import Local from "./components/local";
import Product from "./components/products/product";
function App() {
  return (
    <>
      <Navbar />
      <Local />
      <Product />
    </>
  );
}

export default App;
