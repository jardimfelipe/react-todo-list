import { Box, Checkbox, DeleteIcon } from 'components';
import { RoundedButton } from 'components/atoms/button.component';
import { ListItemProps } from 'Protocols';
import React from 'react';

// import { Container } from './styles';

const ListItem: React.FC<ListItemProps> = ({ todo, onClick }) => {
  return (
    <Box
      params={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Checkbox
        onClick={() => onClick(todo.id || 0)}
        value={todo.done}
        label={todo.title}
        id={`todo-${todo.id}`}
      />
      <RoundedButton variant="default">
        <DeleteIcon />
      </RoundedButton>
    </Box>
  );
};

export default ListItem;
