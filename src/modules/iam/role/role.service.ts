import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RoleEntity } from './entities/role.entity';
import { RoleRepository } from './repositories/role.repository';

import { CreateRoleDto } from './dto/create-role.dto';
import { validate } from 'class-validator';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: RoleRepository,
  ) {}

  async createRole(createRole: CreateRoleDto): Promise<RoleEntity> {
    const errors = await validate(createRole);
    
    if (errors) {
      throw new BadRequestException(errors);
    }

    return await this.roleRepository.create(createRole).save();
  }

  async updateRole(
    id: string,
    updatedData: Partial<RoleEntity>,
  ): Promise<RoleEntity | undefined> {
    await this.roleRepository.update(id, updatedData);
    return await this.roleRepository.findOne({ where: { id: Number(id) } });
  }

  async deleteRole(id: string): Promise<void> {
    await this.roleRepository.delete(Number(id));
  }

  async getAllRoles(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  async getRoleById(id: string): Promise<RoleEntity | undefined> {
    return await this.roleRepository.findOne({ where: { id: Number(id) } });
  }
}
