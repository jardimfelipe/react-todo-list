import React, { useEffect, useState, useCallback } from 'react';

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
} from 'Components';

import { useDispatch, useSelector } from 'react-redux';
import { getTodoList, addTodo } from 'store/ducks/todos.duck';
import { RootState } from 'store';
import { Todo } from 'Protocols';

function App() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<Todo>({
    title: '',
    description: '',
    done: false,
  });
  const [isActive, setIsActive] = useState(false);
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todoReducer
  );

  console.log(isLoading, error);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleSubmit = useCallback(() => {
    dispatch(addTodo(newTodo));
  }, [dispatch, newTodo]);

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
            <Text>{todos.length} Tasks</Text>
          </Box>
        </Box>
        <Box params={{ display: 'flex', justifyContent: 'flex-end' }}>
          <RoundedButton variant="primary" onClick={handleClick}>
            <AddIcon />
          </RoundedButton>
        </Box>
        <ItemsList todos={todos} />
        <Dialog
          onSubmit={handleSubmit}
          onClose={() => setIsActive(false)}
          isActive={isActive}
        >
          <Title>Crie uma nova atividade</Title>
          <TextField
            onChange={handleChange}
            value={newTodo.title}
            name="title"
            placeholder="Titulo"
          />
          <TextField
            onChange={handleChange}
            value={newTodo.description}
            name="description"
            placeholder="Descrição"
          />
        </Dialog>
      </TodoBox>
    </Container>
  );
}

export default App;
