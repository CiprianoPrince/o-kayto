import { NavLink } from 'react-router-dom';
import { DropDownContainer } from '../../../components/ui';

const UserMenu = () => {
  return (
    <DropDownContainer>
      <NavLink className="[ ] block rounded-lg px-3 py-1 hover:bg-primary-100/50" to="signin">
        Sign in
      </NavLink>
      <NavLink className="[ ] block rounded-lg px-3 py-1 hover:bg-primary-100/50" to="signup">
        Sign up
      </NavLink>
      <NavLink className="[ ] block rounded-lg px-3 py-1 hover:bg-primary-100/50" to="account">
        Account
      </NavLink>
      <NavLink className="[ ] block rounded-lg px-3 py-1 hover:bg-primary-100/50" to="logout">
        Logout
      </NavLink>
    </DropDownContainer>
  );
};

export default UserMenu;
