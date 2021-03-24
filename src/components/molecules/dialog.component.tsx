import React from 'react';

import { Modal, Box, Button } from 'components';
import styled from 'styled-components';
import { DialogProps } from 'Protocols';

const DialogContainer = styled.div`
  max-width: 600px;
  min-width: 360px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  gap: 20px;
`;

const Dialog: React.FC<DialogProps> = ({
  isActive,
  actionButtonDisabled = false,
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <Modal isActive={isActive}>
      <DialogContainer>
        {/* <RoundedButton onClick={onClose}>x</RoundedButton> */}
        {children}
        <Box
          params={{ display: 'flex', justifyContent: 'flex-end', gridGap: '10px' }}
        >
          <Button onClick={onClose} variant="default">
            Cancelar
          </Button>
          <Button
            disabled={actionButtonDisabled}
            type="submit"
            onClick={onSubmit}
            variant="primary"
          >
            Enviar
          </Button>
        </Box>
      </DialogContainer>
    </Modal>
  );
};

export default Dialog;
