import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User, Prisma } from '@prisma/client'
import * as bcrypt from 'bcryptjs'
import * as z from 'zod'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(param: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: param },
    })

    if (!user) {
      throw new BadRequestException('User not found')
    }

    return user
  }

  async userById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!user) {
      throw new BadRequestException('User not found')
    }

    delete user.password

    return user
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const createUserBody = z.object({
      email: z.string(),
      password: z.string(),
      name: z.string(),
      phone: z.string(),
    })
    try {
      const { email, password } = createUserBody.parse(data)

      const user = await this.prisma.user.findUnique({ where: { email } })

      if (!!user) {
        throw new ConflictException('User already exists')
      }

      const hash = await bcrypt.hash(password, 10)

      return this.prisma.user.create({
        data: { ...data, password: hash },
      })
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
