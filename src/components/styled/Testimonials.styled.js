import styled from "styled-components";

const StyledTestimonials = styled.div`
  text-align: center;
  margin-top: -180px;
  padding-top: 250px;
  padding-bottom: 200px;
  background: linear-gradient(180deg, #f8f8f8 -45%, rgba(248, 248, 248, 0) 90%);

  h1 {
    font-size: 35px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1,
    p {
      padding-inline: 100px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    h1,
    p {
      padding-inline: 350px;
    }
  }
`;

const Card = styled.div`
  height: 230px;
  width: 400px;
  background-color: #fff;
  text-align: left;
  margin-top: 50px;
  margin-inline: 20px;
  padding: 25px;
  border-radius: 10px;
  border: 2px
    ${({ theme, selected }) => (selected ? theme.colors.primary : "#ddd")} solid;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLg}) {
    width: initial;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxXs}) {
    height: initial;
    margin-inline: 8px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;

  h5 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    margin-left: 20px;
    margin-top: 5px;
  }

  h6 {
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.textGrey};
  }
`;

const Rating = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 5px;

  img {
    margin-left: 7px;
  }
`;

const Body = styled.div`
  margin-top: 20px;
  line-height: 30px;
`;

const ArrowButton = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 60px;
  background: ${({ theme, type }) =>
    type === "prev" ? "#fff" : theme.colors.primary};
  border: 2px ${({ theme }) => theme.colors.primary} solid;

  display: block;
  position: absolute;
  bottom: -130px;
  right: ${({ type }) => (type === "next" ? 0 : "80px")};
`;

const CarouselDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #dde0e4;
  margin-block: 20px;
  position: absolute;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-block: 0;
    bottom: -80px;
    left: -19rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: absolute;
    bottom: -80px;
    left: -33rem;
  }
`;

export {
  StyledTestimonials,
  Card,
  CardHeader,
  Rating,
  Body,
  ArrowButton,
  CarouselDot,
};
