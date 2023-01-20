import { FC, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation: FC = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link to="/" className="navigation-logo">
          {" "}
          E - SHOP
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link_item" to="/shop">
            Shop
          </Link>
          <Link to="/auth">Log in</Link>
          <Link to="/</Fragment>favorites">Favorites</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
