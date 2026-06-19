import { CreateUserDto } from '../dtos/create-user.dto';

export abstract class UserService {

  abstract register(createUserDto: CreateUserDto): Promise<{ message: string }>;
  
  abstract login(): Promise<any>;
}