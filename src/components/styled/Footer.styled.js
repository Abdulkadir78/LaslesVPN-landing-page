import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  padding-top: 4rem;
  padding-bottom: 3rem;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  p {
    width: 320px;
    span {
      font-weight: 700;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    flex-direction: column;
    text-align: center;
    p {
      width: 100%;
    }
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    margin-bottom: 50px;
  }
`;

const FooterLists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.textGrey};

    li {
      margin-bottom: 15px;
      cursor: pointer;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export { FooterContainer, StyledFooter, Copyright, FooterLists };
