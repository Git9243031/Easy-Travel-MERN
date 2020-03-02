import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.bgMain};
    margin: 5% 15%;
    border-radius: 16px;
    overflow: hidden;

    @media ${theme.device.mobileM} {
      margin: 5% 0;
    }

    @media ${theme.device.mobileL} {
      margin: 5% 0;
    }

    @media ${theme.device.tablet} {
      margin: 5% 0;
    }

    @media ${theme.device.laptop} {
      margin: 5% 0;
    }
  `}
`;
