import logo from "../assets/images/logo.svg";
import Container from "./styled/Container.styled";
import {
  FooterContainer,
  StyledFooter,
  Copyright,
  FooterLists,
} from "./styled/Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <StyledFooter>
          <div>
            <img src={logo} alt="Brand logo" />
            <p>
              <span>LaslesVPN </span> is a private virtual network that has
              unique features and has high security.
            </p>
            <Copyright>&copy;2020 LaslesVPN</Copyright>
          </div>

          <FooterLists>
            <div>
              <h4>Product</h4>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4>Engage</h4>
              <ul>
                <li>LaslesVPN ?</li>
                <li>FAQ</li>
                <li>Tutorials</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <h4>Earn Money</h4>
              <ul>
                <li>Affiliate</li>
                <li>Become Partner</li>
              </ul>
            </div>
          </FooterLists>
        </StyledFooter>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
