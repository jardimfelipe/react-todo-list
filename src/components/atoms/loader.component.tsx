import { colors } from 'Constants';
import { LoaderProps } from 'Protocols';
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div<LoaderProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isLoading }) =>
    isLoading
      ? `
    opacity: 1;
    z-index: 100;
  `
      : `
    opacity: 0;
    z-index: -100  
  `}
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border-top: 3px solid ${colors.primary};
  border-right: 3px solid transparent;
  animation: spinner 0.6s linear infinite;
  border-radius: 50%;
  margin: auto;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

// import { Container } from './styles';

const atoms: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <LoaderContainer isLoading={isLoading}>
      <Spinner />
    </LoaderContainer>
  );
};

export default atoms;
