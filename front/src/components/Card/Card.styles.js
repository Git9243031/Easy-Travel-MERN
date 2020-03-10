import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  ${({ theme }) => css`
    width: 250px;
    padding: 0 0 15px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(206, 206, 206, 0.2),
      0px -1px 16px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(206, 206, 206, 0.25);
    img {
      width: 100%;
      height: 130px;
    }
    .stars {
      font-size: 14px;
    }
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
    width: 50px;
    height: 100%;
    padding: 5px;
    color: white;
    line-height: 10px;
    background: #dc3545;
    font-size: 12px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(206, 206, 206, 0.2),
      0px -1px 16px rgba(0, 0, 0, 0.05), 0px 0px 4px rgba(206, 206, 206, 0.25);
  `}
`;
