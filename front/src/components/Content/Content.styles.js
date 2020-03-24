import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 4% 50px;
    background: ${theme.colors.bgColor};
    box-shadow: 0px 2px 4px rgba(206, 206, 206, 0.2),
      0px -1px 16px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(206, 206, 206, 0.25);
  `}
`;
