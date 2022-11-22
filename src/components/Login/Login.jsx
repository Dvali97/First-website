import { NavLink } from "react-router-dom";
import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <NavLink to='/login'>Login</NavLink>
      </div>
    </div>
  );
};

export default Login;
