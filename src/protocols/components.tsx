import { ReactNode } from 'react';
import { SystemColors } from './index';
import { Todo } from './store';

export interface TitleProps {
  readonly color?: SystemColors;
  readonly gutterBottom?: boolean;
}

export interface LoaderProps {
  readonly isLoading: boolean;
}

export interface TextProps {
  readonly align?: 'center' | 'start' | 'left';
  readonly color?: SystemColors;
}

export interface ButtonProps {
  readonly variant?: SystemColors;
}

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
  label: string;
  value: boolean;
}

export interface CheckmarkProps {
  value: boolean;
}

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value: boolean;
}

export interface ListBoxProps {
  todos: Todo[];
  isLoading: boolean;
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

export interface ListItemProps {
  todo: Todo;
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

export interface ModalProps {
  isActive: boolean;
}

export interface DialogProps {
  actionButtonDisabled?: boolean;
  isActive: boolean;
  children: ReactNode;
  onClose: () => void;
  onSubmit: () => void;
}
