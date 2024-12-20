import "./navbar.css";
import logo1 from "../../assets/Logo (1).svg";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className={`${pathname === "/career" ? "blue" : ""}  `}>
        <div className="container">
          <img src={logo1} alt="" />

          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/service"}>Service</NavLink>
            <NavLink to={"/company"}>Company</NavLink>
            <NavLink to={"/career"}>Career</NavLink>

            <Link>Blog</Link>

            <Link>Clone project</Link>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/login"}>Login </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
