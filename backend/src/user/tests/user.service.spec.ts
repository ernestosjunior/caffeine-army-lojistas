import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from '../user.service'
import { PrismaService } from '../../prisma/prisma.service'
import { UserController } from '../user.controller'
import { createUser } from './mock/user'
import { BadRequestException } from '@nestjs/common'

const user = createUser()

describe('UserService', () => {
  let service: UserService
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findUnique: jest.fn().mockResolvedValue(user),
              create: jest.fn().mockResolvedValue(user),
            },
          },
        },
      ],
      controllers: [UserController],
      exports: [UserService],
    }).compile()

    service = module.get<UserService>(UserService)
    prisma = module.get<PrismaService>(PrismaService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('user', () => {
    it('should be return the user', async () => {
      const res = await service.user(user.email)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user

      expect(res).toMatchObject(rest)
    })
    it('should throw an exception', async () => {
      jest
        .spyOn(prisma.user, 'findUnique')
        .mockRejectedValueOnce(new BadRequestException('User not found'))

      try {
        await service.user('test@email.com')
      } catch (error) {
        expect(error.message).toBe('User not found')
      }
    })
  })

  describe('createUser', () => {
    it('should create user', async () => {
      jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(null)

      const res = await service.createUser(user)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user

      expect(res).toMatchObject(rest)
    })
    it('should throw an exception', async () => {
      try {
        await service.createUser(user)
      } catch (error) {
        expect(error.message).toBe('User already exists')
      }
    })
  })
})
