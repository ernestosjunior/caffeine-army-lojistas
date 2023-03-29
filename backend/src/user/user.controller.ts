import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common'
import { UserService } from './user.service'
import { User as UserModel } from '@prisma/client'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@Request() req: any): Promise<UserModel> {
    return this.userService.userById(req.user.userId)
  }

  @Post()
  async createUser(
    @Body()
    userData: {
      name: string
      email: string
      phone: string
      password: string
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData)
  }
}
