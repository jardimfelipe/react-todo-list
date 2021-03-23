import { CSSProperties } from 'react';
import styled from 'styled-components';

interface BoxProps {
  params: CSSProperties;
}
const Box = styled.div`
  ${({ params }: BoxProps) =>
    Object.keys(params).reduce((curr: string, key: string) => {
      curr += `${key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}: ${
        params[key as keyof typeof params]
      };`;
      return curr;
    }, '')}
`;

export default Box;
