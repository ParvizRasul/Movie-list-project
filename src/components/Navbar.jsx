function Navbar({ children }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div className="navbar-brand fs-3 fw-bold text-primary text-opacity-75 mx-auto">
          Movie Watch List
        </div>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;