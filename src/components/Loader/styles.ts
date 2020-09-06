import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  size: number;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Container = styled.div<ContainerProps>`
  border: 8px solid #e0e0e0;
  border-top: 8px solid #e53935;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${spin} 1s linear infinite;
`;
