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
import { getTodoList, addTodo, setTodos } from 'store/ducks/todos.duck';
import { RootState } from 'store';
import { Todo, TodoModel } from 'Protocols';

function App() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<TodoModel>({
    title: '',
    description: '',
  });
  const [isActive, setIsActive] = useState(false);
  const { todos, isLoading, error } = useSelector(
    (state: RootState) => state.todoReducer
  );

  console.log(isLoading, error);

  const handleAddClick = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleTodoClick = useCallback(
    (id: number) => {
      const newTodos = (todos as Array<Todo>).map((todo) => ({
        ...todo,
        ...(todo.id === id && {
          ...todo,
          done: !todo.done,
        }),
      }));
      const todo = todos.find((todo) => todo.id === id);
      todo && dispatch(setTodos(newTodos));
    },
    [dispatch, todos]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      setNewTodo({
        ...newTodo,
        [name]: value,
      });
    },
    [newTodo]
  );

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
          <RoundedButton variant="primary" onClick={handleAddClick}>
            <AddIcon />
          </RoundedButton>
        </Box>
        <ItemsList onClick={handleTodoClick} todos={todos} />
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
