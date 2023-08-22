import { NavLink } from "react-router-dom";

const Bars3Menu = () => {
  return (
    <nav aria-label="menu">
      <ul className="flex flex-col">
        <li className="text-lg font-semibold">
          <NavLink className="block px-3 py-1">Collection</NavLink>
        </li>

        <li className="text-lg font-semibold">
          <NavLink className="block px-3 py-1">Collection</NavLink>
        </li>

        <li className="text-lg font-semibold">
          <NavLink className="block px-3 py-1">Collection</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Bars3Menu;
