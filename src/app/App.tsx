import React from 'react';

import './styles.scss';
import {
  Container,
  TodoBox,
  Box,
  Title,
  SubTitle,
  TitleDescription,
  Text,
  RoundedButton,
  ItemsList,
  AddIcon,
} from 'Components';

function App() {
  return (
    <Container>
      <Title gutterBottom>Hello Code Challenge!</Title>
      <TodoBox>
        <Box
          params={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gridGap: '15px',
          }}
        >
          <Box params={{ display: 'flex', flexDirection: 'column' }}>
            <SubTitle>Terça-feira, 23</SubTitle>
            <TitleDescription>Março</TitleDescription>
          </Box>
          <Box params={{ display: 'flex' }}>
            <Text>12 Tasks</Text>
          </Box>
        </Box>
        <Box params={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RoundedButton>
            <AddIcon />
          </RoundedButton>
        </Box>
        <ItemsList />
      </TodoBox>
    </Container>
  );
}

export default App;
