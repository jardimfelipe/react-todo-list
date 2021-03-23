import React from 'react';
import { ListItem, Box } from 'components';

const ItemsList: React.FC = () => {
  return (
    <Box
      params={{
        display: 'flex',
        gridGap: '15px',
        marginTop: '2em',
        flexDirection: 'column',
      }}
    >
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Box>
  );
};

export default ItemsList;
