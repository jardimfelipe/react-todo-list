import React from 'react';

import { Modal, Box, Button } from 'components';
import styled from 'styled-components';
import { DialogProps } from 'Protocols';
// import { RoundedButton } from 'components/atoms/button.component';

const DialolgContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 20px;
`;

const Dialog: React.FC<DialogProps> = ({ isActive, onClose, children }) => {
  return (
    <Modal isActive={isActive}>
      <DialolgContainer>
        {/* <RoundedButton onClick={onClose}>x</RoundedButton> */}
        {children}
        <Box
          params={{ display: 'flex', justifyContent: 'flex-end', gridGap: '10px' }}
        >
          <Button onClick={onClose} variant="default">
            Cancelar
          </Button>
          <Button variant="primary">Enviar</Button>
        </Box>
      </DialolgContainer>
    </Modal>
  );
};

export default Dialog;
