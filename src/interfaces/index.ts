export interface UserBase {
  username: string
}

export interface User {
  id: number
}

export interface UserCreate extends UserBase {
  password: string
}

export interface Token {
  access_token: string,
  token_type: string,
  refresh_token: string,
  expires_in: number
}