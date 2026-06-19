import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) 
    private readonly boardRepository: Repository<Board>, // 🔒 내장 리포지토리 주입
  ) {}
}