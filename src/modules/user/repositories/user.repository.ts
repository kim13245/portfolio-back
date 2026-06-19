import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findByUsername(username: string): Promise<User | null>;
  abstract save(user: Partial<User>): Promise<User>;
}