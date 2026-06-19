import { Controller } from '@nestjs/common';
import { BoardService } from '../services/board.service';

@Controller('board')
export class BoardController {
  // 🤝 생성자 주입(DI)으로 서비스 레이어를 연결합니다.
  constructor(private readonly boardService: BoardService) {}
}