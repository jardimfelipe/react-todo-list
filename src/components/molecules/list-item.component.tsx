import { Box, Checkbox, Icons } from 'components';
import { RoundedButton } from 'components/atoms/button.component';
import { ListItemProps } from 'Protocols';
import React from 'react';

// import { Container } from './styles';

const ListItem: React.FC<ListItemProps> = ({ todo, onClick, onDelete, onEdit }) => {
  return (
    <Box
      params={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Checkbox
        onClick={() => onClick(todo.id)}
        value={todo.done}
        label={todo.title}
        id={`todo-${todo.id}`}
      />
      <Box
        params={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <RoundedButton onClick={() => onEdit(todo)} variant="default">
          <Icons.EditIcon />
        </RoundedButton>
        <RoundedButton onClick={() => onDelete(todo.id)} variant="default">
          <Icons.DeleteIcon />
        </RoundedButton>
      </Box>
    </Box>
  );
};

export default ListItem;
