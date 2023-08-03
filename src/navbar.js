import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-comp">
      <div>
        <a className="navbar-comp-link" href="#">
          <h2 className="navbar-comp-title">Stansa.Dev</h2>
        </a>
      </div>
      <div className="navbar-comp-div-line"></div>
      <div>
        <h3 className="navbar-comp-email">email stan@stansa.dev</h3>
      </div>
    </div>
  )
};

export default Navbar;
