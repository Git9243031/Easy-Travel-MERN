import styled, { css } from "styled-components";

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
