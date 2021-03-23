import React from 'react';

import { Modal } from 'components';
import styled from 'styled-components';
import { DialogProps } from 'Protocols';
import { RoundedButton } from 'components/atoms/button.component';

const DialolgContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 20px;
`;

const Dialog: React.FC<DialogProps> = ({ isActive, onClose, children }) => {
  return (
    <Modal isActive={isActive}>
      <DialolgContainer>
        <RoundedButton onClick={onClose}>x</RoundedButton>
        {children}
      </DialolgContainer>
    </Modal>
  );
};

export default Dialog;
