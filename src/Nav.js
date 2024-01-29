import { NavLink } from "react-router-dom"

function Nav({ dogs }) {
  const navLinks = dogs.map(dog => (
    <NavLink 
      key={dog.name} 
      to={`/dogs/${dog.name.toLowerCase()}`} 
    >
      {dog.name}
    </NavLink>
  ));

  return (
    <nav>
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {navLinks}<br/>
    </nav>
  );
}

export default Nav;