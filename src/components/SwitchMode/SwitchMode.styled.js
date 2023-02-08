import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform-origin: normal;
    transform: rotate(0deg);
  }

  to {
    transform-origin: normal;
    transform: rotate(360deg);
  }
`;

export const ModeBtn = styled.button`
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    animation: ${rotate} 3s linear infinite;
  }
`;
