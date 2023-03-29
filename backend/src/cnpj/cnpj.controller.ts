import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { CnpjService } from './cnpj.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@Controller('cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Get(':cnpj')
  cnpj(@Param('cnpj') cnpj: string): any {
    return this.cnpjService.getCnpj(cnpj)
  }
}
