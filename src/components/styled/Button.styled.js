import styled from "styled-components";

const Button = styled.button`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.primary : "#fff")};
  padding: 10px 40px;
  margin-inline: 13px;
  font-size: 16px;
  font-weight: 600;
  border: 1px ${({ theme }) => theme.colors.primary} solid;
  border-radius: 50px;
  background: ${({ theme, outlined }) =>
    outlined ? "transparent" : theme.colors.primary};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 30px 54px -5px ${({ theme }) => theme.colors.primaryShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMd}) {
    margin-inline: 0;
  }
`;

export default Button;
