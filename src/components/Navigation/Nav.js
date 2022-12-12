import classes from "./Nav.module.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header className={classes.Nav}>
      <nav>
        <div className={classes.left}>
          {/* <img src="" alt="logo" /> */}
          <h3>KGMA</h3>
        </div>
        <form action="" method="get" className={classes.headInp}>
          <div className={classes.bord}></div>
          <input
            type="search"
            name="q"
            placeholder="Search..."
            className={classes.formInpId}
          />
          <button type="submit" className={classes.formBtn}>
            <img src="" alt="icon" />
          </button>
        </form>
        <ul className={classes.right}>
          <li>
            <Link to="/" className={classes.link}>
              home
            </Link>
          </li>
          <li>
            <Link to="/ notes" className={classes.link}>
              notes
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.link}>
              favorites
            </Link>
          </li>
          <li>
            <Link to="/profile" className={classes.link}>
              profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
