import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service'; 
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('user')
export class UserController {
 
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    
    return this.userService.register(createUserDto);
  }
}