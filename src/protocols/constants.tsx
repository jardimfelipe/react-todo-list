export type SystemColors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'background'
  | 'info'
  | 'default';

export type Colors = {
  [key in SystemColors]: string;
};
