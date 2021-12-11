import { useState } from "react";

import logo from "../assets/images/logo.svg";
import Container from "./styled/Container.styled";
import Button from "./styled/Button.styled";
import {
  NavContainer,
  Nav,
  NavLinks,
  MobileNav,
  HamburgerMenu,
  MobileInner,
} from "./styled/Navbar.styled";

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prevValue) => !prevValue);
  };

  return (
    <NavContainer>
      <Container>
        <Nav>
          <img src={logo} alt="Brand logo" />

          <NavLinks>
            <ul>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>

            <ul>
              <li>Sign In</li>
              <li>
                <Button outlined>Sign Up</Button>
              </li>
            </ul>
          </NavLinks>

          <MobileNav>
            <HamburgerMenu open={mobileNavOpen} onClick={toggleMobileNav}>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerMenu>

            {mobileNavOpen && (
              <MobileInner>
                <ul>
                  <li>
                    <a href="#pricing" onClick={toggleMobileNav}>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" onClick={toggleMobileNav}>
                      Testimonials
                    </a>
                  </li>

                  <li>Sign In</li>
                  <li>
                    <Button outlined>Sign Up</Button>
                  </li>
                </ul>
              </MobileInner>
            )}
          </MobileNav>
        </Nav>
      </Container>
    </NavContainer>
  );
}

export default Navbar;
