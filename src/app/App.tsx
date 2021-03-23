import React, { useEffect, useState } from 'react';

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
  Dialog,
  TextField,
  Button,
} from 'Components';

import { useDispatch, useSelector } from 'react-redux';
import { getTodoList } from 'store/ducks/todos.duck';
import { RootState } from 'store';
import { Todo } from 'Protocols';

function App() {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState<Todo[] | []>([]);
  const [isActive, setIsActive] = useState(false);
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todoReducer
  );

  console.log(isLoading, error);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  useEffect(() => {
    setTodoList((todoList: Todo[]) => (todoList = [...todoList, ...todos]));
  }, [todos]);

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
          <RoundedButton onClick={handleClick}>
            <AddIcon />
          </RoundedButton>
        </Box>
        <ItemsList todos={todoList} />
        <Dialog onClose={() => setIsActive(false)} isActive={isActive}>
          <Title>Crie uma nova atividade!</Title>
          <TextField placeholder="Titulo" />
          <TextField placeholder="Descrição" />
          <Box params={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="default">Aaa</Button>
            <Button>bbbb</Button>
          </Box>
        </Dialog>
      </TodoBox>
    </Container>
  );
}

export default App;
