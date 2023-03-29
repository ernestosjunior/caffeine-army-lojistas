import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AuthModule } from '../src/auth/auth.module'
import { createUser } from '../src/user/tests/mock/user'

const user = createUser()

describe('AuthController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('/auth/login (POST)', () => {
    it('Unauthorized', () => {
      return request(app.getHttpServer()).post('/auth/login').expect(401)
    })
    it('User not found', async () => {
      const input = { email: 'teste@email.com', password: 'test' }

      const res = await request(app.getHttpServer())
        .post('/auth/login')
        .send(input)
        .expect(400)

      expect(res.body.message).toBe('User not found')
    })
    it('Success on login user', async () => {
      const input = { email: user.email, password: user.password }

      const httpServer = request(app.getHttpServer())

      await httpServer.post('/user').send(user).expect(201)

      const res = await httpServer.post('/auth/login').send(input).expect(201)

      expect(Object.keys(res.body)).toContain('access_token')
    })
  })
})
