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
  Icons,
  Dialog,
  TextField,
} from 'Components';

import { useDispatch, useSelector } from 'react-redux';
import { getTodoList, addTodo, setTodos, deleteTodo } from 'store/ducks/todos.duck';
import { RootState } from 'store';
import { Todo, TodoModel } from 'Protocols';

// const { AddIcon } = Icons;

function App() {
  const dispatch = useDispatch();
  const [modelTodo, setModelTodo] = useState<TodoModel>({
    title: '',
    description: '',
  });
  const [isActive, setIsActive] = useState(false);
  const [isEditingATodo, setIsEditingATodo] = useState({ value: false, id: 0 });
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
      setModelTodo({
        ...modelTodo,
        [name]: value,
      });
    },
    [modelTodo]
  );

  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleEdit = useCallback((todo: Todo) => {
    setIsEditingATodo(
      (isEditingATodo) =>
        (isEditingATodo = { ...isEditingATodo, value: true, id: todo.id })
    );
    setModelTodo(
      (modelTodo) =>
        (modelTodo = {
          ...modelTodo,
          title: todo.title,
          description: todo.description,
        })
    );
  }, []);

  const handleSubmit = useCallback(() => {
    if (isEditingATodo.value) {
      const newTodos = (todos as Array<Todo>).map((todo) => ({
        ...todo,
        ...(todo.id === isEditingATodo.id && {
          ...todo,
          title: modelTodo.title,
          description: modelTodo.description,
        }),
      }));
      const todo = todos.find((todo) => todo.id === isEditingATodo.id);
      todo && dispatch(setTodos(newTodos));
    } else {
      dispatch(addTodo(modelTodo));
    }
    setIsActive((isActive) => (isActive = !isActive));
  }, [dispatch, modelTodo, isEditingATodo, todos]);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  useEffect(() => {
    if (!isEditingATodo.value) return;
    setIsActive((isActive) => (isActive = !isActive));
  }, [isEditingATodo.value]);

  useEffect(() => {
    if (isActive) return;
    setIsEditingATodo(
      (isEditingATodo) =>
        (isEditingATodo = { ...isEditingATodo, value: false, id: 0 })
    );
    setModelTodo(
      (modelTodo) => (modelTodo = { ...modelTodo, title: '', description: '' })
    );
  }, [isActive]);

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
            <Icons.AddIcon />
          </RoundedButton>
        </Box>
        <ItemsList
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClick={handleTodoClick}
          todos={todos}
        />
        <Dialog
          onSubmit={handleSubmit}
          onClose={() => setIsActive(false)}
          isActive={isActive}
        >
          <Title>
            {isEditingATodo.value
              ? 'Edite sua atividade'
              : 'Crie uma nova atividade'}
          </Title>
          <TextField
            onChange={handleChange}
            value={modelTodo.title}
            name="title"
            placeholder="Titulo"
          />
          <TextField
            onChange={handleChange}
            value={modelTodo.description}
            name="description"
            placeholder="Descrição"
          />
        </Dialog>
      </TodoBox>
    </Container>
  );
}

export default App;
