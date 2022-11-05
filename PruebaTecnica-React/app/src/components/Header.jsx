import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <h1>
          <NavLink to="">DEMO Streaming</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="freeTrial">
            <NavLink to="/freeTrial">Start your free trial</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
