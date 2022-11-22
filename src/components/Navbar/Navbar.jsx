import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <NavLink to="/films">Films</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/multfilms">Mutlfilms</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/serials">Serials</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/shows">Shows</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
