import React from 'react';
import { ListItem, Box } from 'components';
import { ItemsListProps } from 'Protocols';

const ItemsList: React.FC<ItemsListProps> = ({ todos, onClick, onDelete }) => {
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
          <ListItem
            onDelete={onDelete}
            onClick={onClick}
            key={`todo-${todo.id}`}
            todo={todo}
          />
        );
      })}
    </Box>
  );
};

export default ItemsList;
