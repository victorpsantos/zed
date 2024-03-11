import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

import { CreateUserDto } from './dto/create-user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const errors = await validate(createUser);
    
    if (errors) {
      throw new BadRequestException(errors);
    }

    return await this.userRepository.create(createUser).save();
  }
}
