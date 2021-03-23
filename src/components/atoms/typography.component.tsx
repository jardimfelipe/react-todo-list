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

export const SubTitle = styled.h2<TitleProps>`
  font-size: 1.5em;
  color: ${({ color = 'secondary' }) => colors[color]};
  ${({ gutterBottom }) =>
    gutterBottom
      ? `
    margin-bottom: 0.8em;
  `
      : undefined}
`;

export const TitleDescription = styled.span`
  font-size: 1.1em;
  color: #a5a5a5;
`;

export const Text = styled.span`
  font-size: 0.9em;
`;
