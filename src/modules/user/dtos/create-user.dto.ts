import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: '아이디는 문자열이어야 합니다.' })
  @IsNotEmpty({ message: '아이디는 필수 입력 값입니다.' })
  @Length(4, 20, { message: '아이디는 4자 이상 20자 이하로 입력해주세요.' })
  @Matches(/^[a-zA-Z0-9_]+$/, { message: '아이디는 영문, 숫자, 언더바(_)만 사용 가능합니다.' })
  username: string;

  @IsString({ message: '비밀번호는 문자열이어야 합니다.' })
  @IsNotEmpty({ message: '비밀번호는 필수 입력 값입니다.' })
  @Length(8, 30, { message: '비밀번호는 최소 8자 이상, 30자 이하로 설정해주세요.' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/, {
    message: '비밀번호는 영문, 숫자, 특수문자(@$!%*#?&)를 최소 하나씩 포함해야 합니다.',
  })
  password: string;
}