import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
// import signin from "../../assets/Profile.svg";
// import signout from "../../assets/signout.svg";
// import Favourite from "../../assets/favourite.svg";
// import CartLink from "../CartLink.js/CartLink";
import { NavLink } from "react-router-dom";
// import history from "../../assets/history.svg";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Products</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavLink to="/cart" className={classes.CartLink}>
        {/* <CartLink /> */}
      </NavLink>
      <NavItem url="/favourites">
        {/* <img src={Favourite} alt="favourite" /> */}sadas
      </NavItem>
      <NavItem url="/signout">
      asda
      </NavItem>

      <NavItem url="/auth">
        {/* <img src={signin} alt="signout" /> */}sadasd
      </NavItem>
      <NavItem url="/history">
        {/* <img src={history} alt="history" /> */}sada
      </NavItem>
    </ul>
  );
}

export default Nav;
