import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  app(): { name: string } {
    return { name: 'caffeine-army-lojistas_back' }
  }
}
