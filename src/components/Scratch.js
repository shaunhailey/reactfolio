<nav>
  <NavLink activeClassName="selected" className="nav-link" exact to="/">
    Home
  </NavLink>
  <NavLink activeClassName="selected" className="nav-link" exact to="/About">
    About
  </NavLink>
  <NavLink activeClassName="selected" className="nav-link" exact to="/Contact">
    Contact
  </NavLink>
</nav>
<Switch>
  <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />
  <Route exact path="/" component={Home} />
</Switch>
