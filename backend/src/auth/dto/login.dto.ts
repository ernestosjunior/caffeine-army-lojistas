export class LoginInput {
  email: string
  password: string
}

export class JwtPayload {
  sub: string
  name: string
}

export class UserData {
  id: string
  name: string
  email: string
  phone: string
}
