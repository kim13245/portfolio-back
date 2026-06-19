import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '../user.repository';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly typeOrmRepository: Repository<User>,
  ) {
    super();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.typeOrmRepository.findOne({ where: { username } });
  }

  async save(user: Partial<User>): Promise<User> {
    return this.typeOrmRepository.save(user);
  }
}