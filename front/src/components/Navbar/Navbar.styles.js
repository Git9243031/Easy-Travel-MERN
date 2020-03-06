import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  ${({ theme }) => css`
    nav {
      background: ${theme.colors.bgMain};
      .logo-symbol {
        float: left;
        width: 44px;
        height: 44px;
        line-height: 44px;
        background-color: ${theme.colors.logo};
        border-radius: 100px;
        text-align: center;
        color: #fff;
        font-size: 28px;
        font-weight: 800;
        margin-right: 8px;
        margin-top: 4px;
      }

      .logo-text {
        float: left;
        line-height: 50px;
        font-size: 20px;
        color: ${theme.colors.navLink};
        font-weight: 600;

        span {
          font-weight: 400;
        }
      }
      .nav-link {
        color: ${theme.colors.navLink};
      }
    }
  `}
`;
