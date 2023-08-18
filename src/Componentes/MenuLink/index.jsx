import { NavLink } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink({ children, to }) {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "link" : isActive ? `linkAtivo link` : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
}
