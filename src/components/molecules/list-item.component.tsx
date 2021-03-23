import { Box, Checkbox, DeleteIcon } from 'components';
import { RoundedButton } from 'components/atoms/button.component';
import React from 'react';

// import { Container } from './styles';

const ListItem: React.FC = () => {
  return (
    <Box
      params={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Checkbox value={true} label="Buy pizza on the way" name="name" />
      <RoundedButton variant="default">
        <DeleteIcon />
      </RoundedButton>
    </Box>
  );
};

export default ListItem;
