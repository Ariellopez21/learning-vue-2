export interface UserBase {
  username: string
  isAdmin: boolean
}

export interface User {
  id: number
}

export interface UserCreate extends UserBase {
  password: string
}

export interface Token {
  accessToken: string,
  tokenType: string,
  refreshToken: string,
  expiresIn: number
}