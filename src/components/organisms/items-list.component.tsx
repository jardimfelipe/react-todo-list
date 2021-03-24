import React from 'react';
import { ListItem, Box } from 'components';
import { ItemsListProps } from 'Protocols';

const ItemsList: React.FC<ItemsListProps> = ({ todos }) => {
  const handleClick = (id: number) => {
    console.log(id);
  };
  return (
    <Box
      params={{
        display: 'flex',
        gridGap: '15px',
        marginTop: '2em',
        flexDirection: 'column',
      }}
    >
      {todos.map((todo) => {
        return (
          <ListItem onClick={handleClick} key={`todo-${todo.id}`} todo={todo} />
        );
      })}
    </Box>
  );
};

export default ItemsList;
