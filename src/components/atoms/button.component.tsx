import styled from 'styled-components';

import { colors } from 'Constants';

import { ButtonProps } from 'Protocols';

export const RoundedButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  padding: 0;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
  color: #ffffff;
  border: none;
  background-color: ${({ variant = 'default' }) => colors[variant]};
  svg {
    max-width: 15px;
  }
  &:hover {
    opacity: 0.4;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ variant = 'default' }) => colors[variant]};
  color: ${({ variant = 'default' }) =>
    variant === 'default' ? '#000000' : '#ffffff'};
  border: none;
  padding: 5px 20px;
  font-size: 1.2em;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
