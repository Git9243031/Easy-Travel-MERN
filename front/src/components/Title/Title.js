import styled, { css } from "styled-components";

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${({ size }) => size || "16px"};
    text-align: ${({ position }) => position};

    @media ${theme.device.mobileM} {
      font-size: ${({ sizeM }) => sizeM || "12px"};
    }
  `}
`;
