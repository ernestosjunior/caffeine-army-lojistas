import { Controller, Post, UseGuards, Request } from '@nestjs/common'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { AuthService } from './auth.service'
import { User } from '@prisma/client'

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: { user: User }) {
    return this.authService.login(req.user)
  }
}
