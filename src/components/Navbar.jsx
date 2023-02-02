import "./Navbar.scss";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";

const Navbar = ({ click }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Persnickety Pups</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {auth._id ? (
        <Logout
          onClick={() => {
            dispatch(logoutUser(null));
          }}
        >
          Logout
        </Logout>
      ) : (
        <AuthLinks>
          <Link to="/login">Login</Link>
          <Link to="register">Register</Link>
        </AuthLinks>
      )}
    </nav>
  );
};

export default Navbar;

const AuthLinks = styled.div`
  a {
    &:last-child {
      margin-left: 1rem;
    }
  }
`;

const Logout = styled.div`
  color: white;
  cursor: pointer;
`;