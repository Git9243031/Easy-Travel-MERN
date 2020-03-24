import styled, { css } from "styled-components";
import { Slider } from "antd";

export const SliderStyled = styled(Slider)`
  ${({ theme }) => css`
    width: ${({ width }) => width || "200px"};
    .ant-slider-track {
      background: ${theme.colors.primary};
    }
  `}
`;
