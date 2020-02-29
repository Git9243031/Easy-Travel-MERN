import styled, { css } from "styled-components";

export const Layout = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.colors.bgMain};
    margin: 5% 15%;
    padding: 40px 70px;
    border-radius: 16px;
    overflow: hidden;

    @media ${theme.device.mobileM} {
      margin: 5% 0;
      padding: 40px 5px;
    }

    @media ${theme.device.mobileL} {
      margin: 5% 0;
      padding: 40px 5px;
    }

    @media ${theme.device.tablet} {
      margin: 5% 0;
      padding: 40px 5px;
    }

    @media ${theme.device.laptop} {
      margin: 5% 0;
      padding: 40px 5px;
    }
  `}
`;
