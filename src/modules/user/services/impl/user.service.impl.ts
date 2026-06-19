import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserRepository } from '../../repositories/user.repository';
import { CreateUserDto } from '../../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserServiceImpl extends UserService {
  constructor(
    // 💡 추상 클래스 명칭을 타입으로 바로 주입받습니다.
    private readonly userRepository: UserRepository,
  ) {
    super();
  }

  async register(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const { username, password } = createUserDto;

    const existingUser = await this.userRepository.findByUsername(username);
    if (existingUser) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await this.userRepository.save({
      username,
      password: hashedPassword,
    });

    return { message: '회원가입이 완료되었습니다.' };
  }

  async login(): Promise<any> {
    return { message: 'Login Success' };
  }
}