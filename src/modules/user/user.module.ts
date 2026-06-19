import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../user/controllers/user.controller';
import { UserService } from '../user/services/user.service';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [
    // TypeORM이 User 엔티티를 인식하도록 등록
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 다른 모듈에서 유저 서비스를 쓸 수 있도록 내보내기
})
export class UserModule {}