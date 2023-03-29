import { Test, TestingModule } from '@nestjs/testing'
import { CnpjService } from '../cnpj.service'
import { CnpjController } from '../cnpj.controller'

describe('CnpjService', () => {
  let service: CnpjService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnpjService],
      controllers: [CnpjController],
    }).compile()

    service = module.get<CnpjService>(CnpjService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
