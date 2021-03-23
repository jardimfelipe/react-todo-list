import React, { useEffect } from 'react';

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

import { useDispatch, useSelector } from 'react-redux';
import { getTodoList } from 'store/ducks/todos.duck';
import { RootState } from 'store';

function App() {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todoReducer
  );

  console.log(isLoading, error);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

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
        <ItemsList todos={todos} />
      </TodoBox>
    </Container>
  );
}

export default App;
