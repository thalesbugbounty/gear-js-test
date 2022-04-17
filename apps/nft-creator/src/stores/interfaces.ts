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
  superToken: string;
  refreshToken: () => void;
  setToken: (token: string) => void;
}
