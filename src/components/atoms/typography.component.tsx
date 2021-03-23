import styled from 'styled-components';

import { colors } from 'Constants';

import { TitleProps } from 'Protocols';

export const Title = styled.h1<TitleProps>`
  font-size: 2em;
  color: ${({ color = 'primary' }) => colors[color]};
  ${({ gutterBottom }) =>
    gutterBottom
      ? `
    margin-bottom: 0.8em;
  `
      : undefined}
`;
