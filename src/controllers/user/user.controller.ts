import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddUserUseCase } from 'src/usecases/user/add-user-usecase';
import { GetAllUsersUseCase } from 'src/usecases/user/get-all-users-usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly addUserUseCase: AddUserUseCase,
    private readonly getAllUsersUsecase: GetAllUsersUseCase,
  ) {}

  @Post()
  async create(@Body() dto: any) {
    return await this.addUserUseCase.create(dto);
  }

  @Get()
  async findAll() {
    return await this.getAllUsersUsecase.getAll();
  }
}
