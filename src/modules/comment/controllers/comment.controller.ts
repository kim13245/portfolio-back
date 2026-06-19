import { Controller } from '@nestjs/common';
import { CommentService } from '../services/comment.service';

@Controller('comment')
export class CommentController {
  // 🤝 생성자 주입(DI)으로 서비스 레이어를 연결합니다.
  constructor(private readonly commentService: CommentService) {}
}