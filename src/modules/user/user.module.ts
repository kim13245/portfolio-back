import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';

import { UserService } from './services/user.service';
import { UserServiceImpl } from './services/impl/user.service.impl';
import { UserRepository } from './repositories/user.repository';
import { UserRepositoryImpl } from './repositories/impl/user.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
    {
      provide: UserService,
      useClass: UserServiceImpl,
    },
  ],
  exports: [UserService, UserRepository],
})
export class UserModule {}