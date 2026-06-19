import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from '../comment/controllers/comment.controller';
import { Comment } from '../comment//entities/comment.entity';
import { CommentService } from '../comment/services/comment.service';
import { UserModule } from '@/modules/user/user.module';   // 🤝 유저 모듈 연동
import { BoardModule } from '@/modules/board/board.module'; // 🤝 게시글 모듈 연동

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    UserModule,
    BoardModule, // 댓글은 유저와 게시글 둘 다 알아야 하므로 두 모듈을 모두 가져옵니다.
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}