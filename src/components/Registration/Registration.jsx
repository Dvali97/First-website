import { NavLink } from "react-router-dom";
import s from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <NavLink to='/registration'>Registration</NavLink>
      </div>
    </div>
  );
};

export default Registration;
