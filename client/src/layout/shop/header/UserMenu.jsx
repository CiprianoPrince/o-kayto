import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <nav aria-label="menu">
      <ul className="flex flex-col">
        <li className="text-lg font-semibold p-2">
          <NavLink to="signin" className="block px-3 py-1">
            Sign in
          </NavLink>
        </li>

        <li className="text-lg font-semibold p-2">
          <NavLink to="signin" className="block px-3 py-1">
            Sign up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserMenu;
