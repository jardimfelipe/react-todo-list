import React from 'react';
import { ListItem, Box, Loader } from 'components';
import { ItemsListProps } from 'Protocols';
import { Text } from 'components/atoms/typography.component';

const ItemsList: React.FC<ItemsListProps> = ({
  todos,
  isLoading,
  onClick,
  onDelete,
  onEdit,
}) => {
  return (
    <Box
      params={{
        display: 'flex',
        gridGap: '15px',
        marginTop: '2em',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Loader isLoading={isLoading} />
      {todos.length ? (
        todos.map((todo) => {
          return (
            <ListItem
              onEdit={onEdit}
              onDelete={onDelete}
              onClick={onClick}
              key={`todo-${todo.id}`}
              todo={todo}
            />
          );
        })
      ) : (
        <Text align="center">Não há atividades. Crie uma agora!</Text>
      )}
    </Box>
  );
};

export default ItemsList;
