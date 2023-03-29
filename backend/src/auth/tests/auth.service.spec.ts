import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from '../auth.service'
import { AuthController } from '../auth.controller'
import { UserModule } from '../../user/user.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from '../strategies/local.strategy'
import { JwtStrategy } from '../strategies/jwt.strategy'
import { faker } from '@faker-js/faker'

const user = {
  id: faker.datatype.uuid(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  password: faker.internet.password(),
}

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
          secret: 'secret_test',
          signOptions: { expiresIn: '8h' },
        }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy],
      controllers: [AuthController],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
  describe('login', () => {
    it('should return the user with access token', async () => {
      const res = await service.login(user)

      expect(res).toHaveProperty('access_token')
    })
  })
})
