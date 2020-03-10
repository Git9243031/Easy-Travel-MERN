import styled from "styled-components";

export const UploaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropBox = styled.div`
  width: 300px;
  height: 240px;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PreviewBox = styled.div`
  width: 350px;
  height: 240px;
  display: flex;
  overflow-x: scroll;
  
`;
