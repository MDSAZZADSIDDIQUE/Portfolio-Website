import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <NavLink to="/" className="flex justify-center items-center">
        <h1>Md. Sazzad Siddique Likhon</h1>
      </NavLink>
      <nav className="flex gap-10">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
