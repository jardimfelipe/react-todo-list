import React from 'react';
import styled from 'styled-components';

import { CheckboxProps, CheckmarkProps, LabelProps } from 'Protocols';
import { colors } from 'Constants';
// import { Container } from './styles';

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  position: relative;
  cursor: pointer;
  label {
  }
`;

const Checkmark = styled.span<CheckmarkProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${({ value }) => (value ? colors.primary : 'transparent')};
  &:after {
    content: '';
    position: absolute;
    display: ${({ value }) => (value ? 'block' : 'none')};
  }
`;

const Label = styled.label<LabelProps>`
  margin-left: 35px;
  ${({ value }) =>
    value
      ? `
    color: #cccccc;
    text-decoration: line-through;
  `
      : undefined}
`;

const Checkbox: React.FC<CheckboxProps> = ({ label, id, value = false }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput id={id} />
      <Checkmark value={value} />
      <Label value={value} htmlFor={id}>
        {label}
      </Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
