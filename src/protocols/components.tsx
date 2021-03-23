import { SystemColors } from './index';
import { Todo } from './store';

export interface TitleProps {
  readonly color?: SystemColors;
  readonly gutterBottom?: boolean;
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

export interface ItemsListProps {
  todos: Todo[];
}

export interface ListItemProps {
  todo: Todo;
}
