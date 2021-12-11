import styled from "styled-components";

const NavContainer = styled.div`
  width: 100%;
  z-index: 2;
  background: #fff;
  position: fixed;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 30px 0 10px 0;
  }
`;

const NavLinks = styled.div`
  display: flex;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;

    li {
      margin-inline: 12px;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textGrey};
      }
    }
  }

  ul:nth-child(2) {
    li:first-child {
      font-weight: 600;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    display: none;
  }
`;

const MobileNav = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  margin-right: 10px;

  span {
    display: block;
    width: 20px;
    height: 2.5px;
    background-color: #000;
    margin-bottom: 3px;
    transition: all 0.5s;
  }

  span:first-child {
    transform: rotate(${({ open }) => (open ? "45deg" : 0)})
      translateY(${({ open }) => (open ? "8px" : 0)});
  }

  span:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:last-child {
    transform: rotate(${({ open }) => (open ? "-45deg" : 0)})
      translateY(${({ open }) => (open ? "-8px" : 0)});
  }
`;

const MobileInner = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 7rem;
  right: 0;
  animation: 0.5s ease-in-out navSlide;

  @keyframes navSlide {
    from {
      right: -80rem;
    }

    to {
      right: 0;
    }
  }

  ul {
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    li {
      font-size: large;
      margin-block: 25px;
      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textGrey};
      }
    }
  }
`;

export { NavContainer, Nav, NavLinks, MobileNav, HamburgerMenu, MobileInner };
