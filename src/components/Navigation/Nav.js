import classes from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header className={classes.Nav}>
      <nav>
        <div className={classes.left}>
          {/* <img src="" alt="logo" /> */}
          <h3>KGMA</h3>
        </div>
        <form action="" method="get" class={classes.headInp}>
          <div class={classes.bord}></div>
          <input
            type="search"
            name="q"
            placeholder="Search..."
            class={classes.formInpId}
          />
          <button type="submit" class={classes.formBtn}>
            <img src="" alt="icon" />
          </button>
        </form>
        <ul className={classes.right}>
          <li>
            <NavLink to="" className={classes.link}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={classes.link}>
              notes
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={classes.link}>
              favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="" className={classes.link}>
              profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
