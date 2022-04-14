// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }

export interface Attribute {
  name: string;
  value: string | number;
}

export interface Token {
  value: string;
  refresh: (value: string) => void;
}
