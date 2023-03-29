import { Injectable, BadRequestException } from '@nestjs/common'
import { getCnpjData } from '../services/receitaWS'
import { faker } from '@faker-js/faker'

@Injectable()
export class CnpjService {
  async getCnpj(cnpj: string): Promise<any> {
    try {
      const data = await getCnpjData(cnpj)

      if (data && data.status === 'ERROR') {
        throw new BadRequestException(data.message)
      }

      return {
        additional_information: faker.lorem.paragraphs(2),
        ...data,
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
