import React from 'react';

import './styles.scss';
import { Container, Input, TodoBox, Box, Title } from 'Components';

function App() {
  return (
    <Container>
      <Title gutterBottom>Hello Code Challenge!</Title>
      <TodoBox>
        <Input type="text" />
        <Box params={{ display: 'flex' }}></Box>
      </TodoBox>
    </Container>
  );
}

export default App;
