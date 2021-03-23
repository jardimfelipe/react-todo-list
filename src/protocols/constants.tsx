export type SystemColors =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'background'
  | 'default';

export type Colors = {
  [key in SystemColors]: string;
};
