import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  // 🤝 생성자 주입(DI)으로 서비스 레이어를 연결합니다.
  constructor(private readonly userService: UserService) {}
}