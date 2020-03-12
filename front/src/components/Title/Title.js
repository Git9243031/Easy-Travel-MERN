import styled, { css } from "styled-components";

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${({ size }) => size || "16px"};
    text-align: ${({ position }) => position};
    font-weight: ${({ bold }) => bold && 800};

    @media ${theme.device.mobileM} {
      font-size: ${({ sizeM }) => sizeM || "12px"};
    }
  `}
`;
