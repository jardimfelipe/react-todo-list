import styled from 'styled-components';
import { ModalProps } from 'Protocols';

const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ isActive }) =>
    isActive
      ? `
    opacity: 1;
    z-index: 100;
  `
      : `
    opacity: 0;
    z-index: -100  
  `}
`;

export default Modal;
