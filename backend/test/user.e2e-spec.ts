import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { UserModule } from '../src/user/user.module'
import { createUser } from '../src/user/tests/mock/user'

const user = createUser()

describe('UserController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  describe('/user (POST)', () => {
    it('User created', () => {
      return request(app.getHttpServer()).post('/user').send(user).expect(201)
    })
    it('User already exists', async () => {
      const res = await request(app.getHttpServer())
        .post('/user')
        .send(user)
        .expect(409)

      expect(res.body.message).toBe('User already exists')
    })
  })
})
