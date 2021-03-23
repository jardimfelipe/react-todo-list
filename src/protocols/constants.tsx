export type SystemColors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'background';

export type Colors = {
  [key in SystemColors]: string;
};
