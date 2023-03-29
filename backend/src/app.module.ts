import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { CnpjModule } from './cnpj/cnpj.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    UserModule,
    AuthModule,
    CnpjModule,
    ConfigModule.forRoot({ expandVariables: true, isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
