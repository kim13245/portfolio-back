import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardController } from './controllers/board.controller';
import { Board } from './entities/board.entity';
import { BoardService } from './services/board.service';
import { UserModule } from '@/modules/user/user.module'; // 🤝 유저 모듈 연동

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]),
    UserModule, // 게시글에서 유저 정보가 필요하므로 유저 모듈을 가져옵니다.
  ],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [BoardService],
})
export class BoardModule {}