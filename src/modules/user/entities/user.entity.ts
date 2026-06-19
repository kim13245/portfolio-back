import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Board } from '../../board/entities/board.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment') // SERIAL 매핑
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}