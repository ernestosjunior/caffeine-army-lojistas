import { faker } from '@faker-js/faker'

export const createUser = () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
})
