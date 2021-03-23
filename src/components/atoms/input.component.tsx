import styled from 'styled-components';

const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  background: #ffffff;
  color: #000000;
  font-size: 1.125em;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  transition: 300ms ease all;
  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

export default Input;
