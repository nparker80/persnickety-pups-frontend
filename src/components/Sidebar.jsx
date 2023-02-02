import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Sidebar = ({ show, Click }) => {
  const sidebarClass = ["sidebar"];

  if (show) {
    sidebarClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return < div className={sidebarClass.join(" ")}>
    <ul className="sidebar__links" onClick={Click}>

      <li>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
            Cart <span className="sidebar__cartbadge">{getCartCount()}</span>
          </span>
        </Link>
      </li>
      <li>
        <Link to="/">Shop</Link>
      </li>
    </ul>
  </div >;
};

export default Sidebar