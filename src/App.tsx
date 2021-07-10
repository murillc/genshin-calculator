import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="px-3 py-2" color="light" light expand="md">
        <NavbarBrand href="/">Genshin Utilities</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/characters/">Calculator</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/inventory/">Inventory</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/murillc/genshin-calculator">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Hu Tao Hu Tao Hu Tao Hu Tao</NavbarText>
        </Collapse>
      </Navbar>

      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
