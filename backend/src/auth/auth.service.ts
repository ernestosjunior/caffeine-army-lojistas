import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcryptjs'
import { UserService } from '../user/user.service'
import { LoginInput } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginInput: LoginInput) {
    const { email, password } = loginInput

    const user = await this.userService.user(email)
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (user && isValidPassword) {
      delete user.password

      return user
    }

    return null
  }

  async login(user: User): Promise<any> {
    const payload = { name: user.name, sub: user.id }

    delete user.password

    return {
      access_token: this.jwtService.sign(payload),
      user,
    }
  }
}
