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
  background-color: ${({ variant = 'primary' }) => colors[variant]};
  svg {
    max-width: 15px;
  }
  &:hover {
    opacity: 0.4;
  }
`;
