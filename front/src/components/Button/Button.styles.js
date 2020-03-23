import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  ${({ theme }) => css`
    width: ${({ width }) => width || "150px"};
    height: ${({ height }) => height || "25px"};
    color: ${theme.colors.btnColorText};
    border: none;
    border-radius: 16px;
    background-color: ${theme.colors.primary};
    margin: ${({ margin }) => margin};

    @media ${theme.device.mobileM} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.mobileL} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.tablet} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.laptop} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }
  `}
`;

export const ButtonLink = styled(Link)`
         ${({ theme }) => css`
    width: ${({ width }) => width || "150px"};
    height: ${({ height }) => height || "25px"};
    color: ${theme.colors.btnColorText};
    border: none;
    border-radius: 16px;
    background-color: ${theme.colors.primary};
    margin: ${({ margin }) => margin};
    display: block;
    text-align: center;
    transition: all 0.4s ease; 
    
    &:hover {
      color: ${theme.colors.btnColorText};
      background-color: ${theme.colors.primaryHover};
        box-shadow: 0px 2px 4px rgba(206, 206, 206, 0.2),
      0px -1px 16px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(206, 206, 206, 0.25);
    }

    @media ${theme.device.mobileM}
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.mobileL} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.tablet} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }

    @media ${theme.device.laptop} {
      width: ${({ widthMl }) => widthMl || "150px"};
      height: ${({ heightMl }) => heightMl || "25px"};
    }
  `}
       `;
