import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  margin-top: 9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    flex-direction: column;
    margin-top: 6rem;

    img {
      margin-top: 50px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    img {
      max-width: 450px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    img {
      max-width: 580px;
    }
  }
`;

const TextContent = styled.div`
  padding-inline: 10px;

  h1 {
    font-size: 50px;
    font-weight: 500;
    line-height: 70px;
    span {
      font-weight: bold;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.textGrey};
    font-size: 16px;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    text-align: center;
    padding-inline: 70px;
    margin-top: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxXs}) {
    padding-inline: 0;

    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.sm}) and (max-width: ${({ theme }) =>
      theme.breakpoints.maxLg}) {
    padding-right: 30px;
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`;

const Cta = styled.button`
  padding: 22px 75px;
  margin-top: 30px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 30px 54px -5px ${({ theme }) => theme.colors.primaryShadow};
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLg}) {
    padding: 17px 60px;
    font-size: 14px;
  }
`;

export { StyledHero, TextContent, Cta };
