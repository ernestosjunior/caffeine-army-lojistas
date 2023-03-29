import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from './prisma/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
  })

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  const port = process.env.PORT || 3000

  console.log(`🚀 Server is running on port ${port}`)

  await app.listen(port)
}

bootstrap()
