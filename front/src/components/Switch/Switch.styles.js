import styled, { css } from "styled-components";
import { Switch } from "antd";

export const SwitchStyled = styled(Switch)`
  &&& {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `}
  }
`;
