import "../assets/style/nav.scss";
import logo from "../assets/images/logo.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
      </ul>
      <div className="card">
        <h3>Card</h3>
        <h3>Login</h3>
      </div>
    </nav>
  );
}
export default Navbar;
