import styled from "styled-components";

import tick from "../../assets/images/checkmark.svg";

const StyledPricing = styled.div`
  text-align: center;
  margin-top: 100px;

  h1 {
    font-size: 35px;
  }

  p {
    color: ${({ theme }) => theme.colors.textGrey};
    margin-bottom: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    p {
      padding-inline: 100px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 180px;

    p {
      padding-inline: 300px;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxSm}) {
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: 100px;
  }
`;

const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 30px;
  padding: 80px 0 50px;
  background-color: #fff;

  border: 2px
    ${({ theme, selected }) => (selected ? theme.colors.primary : "#dddddd")}
    solid;
  border-radius: 10px;

  img {
    width: 145px;
    margin: 0 auto;
  }

  ul {
    text-align: left;
    margin: 30px auto 0;
    list-style-image: url(${tick});
    color: ${({ theme }) => theme.colors.textGrey};

    li {
      font-size: 14px;
      margin-bottom: 10px;
      line-height: 30px;
    }
  }

  h3 {
    font-size: 25px;
    font-weight: 500;
    padding-top: 50px;
    margin-top: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxXs}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 30%;
    align-self: initial;
  }
`;

const CardTitle = styled.h6`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
`;

export { StyledPricing, CardContainer, Card, CardTitle };
