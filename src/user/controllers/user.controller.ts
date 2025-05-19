import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Render,
  Redirect,
  Sse,
  MessageEvent, Req
} from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Observable, Subject } from 'rxjs';
import {ApiExcludeController} from "@nestjs/swagger";

@Controller('user')
@ApiExcludeController()
export class UserController {
  private userEvents = new Subject<MessageEvent>();

  constructor(private readonly userService: UserService) {}

  @Sse('events')
  sse(): Observable<MessageEvent> {
    return this.userEvents.asObservable();
  }

  @Post()
  @Redirect('/user/list')
  async create(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.userService.create(createUserDto);
    this.userEvents.next({
      data: {
        type: 'USER_CREATED',
        user: createdUser
      }
    });
    return createdUser;
  }

  @Get('/register')
  @Render('user/user-register')
  async showRegistrationForm() {
    return { };
  }

  @Get('/list')
  @Render('user/users')
  async findAll() {
    const { users, total, totalPages } = await this.userService.findAll();
    return { users };
  }

  @Get(':id')
  @Render('user/user-profile')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    return { user };
  }

  @Get(':id/edit')
  @Render('user/user-edit')
  async editForm(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    return { user };
  }

  @Post(':id/update')
  @Redirect()
  async update(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
  ) {
    const updatedUser = await this.userService.update(id, updateUserDto);
    this.userEvents.next({
      data: {
        type: 'USER_UPDATED',
        user: updatedUser,
      }
    });
    return { url: `/user/${id}` };
  }

  @Post(':id')
  @Redirect('list')
  async removeViaPost(@Param('id') id: string) {
    return this.remove(id);
  }

  @Delete(':id')
  @Redirect('list')
  async remove(@Param('id') id: string) {
    const deletedUser = await this.userService.remove(id);
    this.userEvents.next({
      data: {
        type: 'USER_DELETED',
        user: deletedUser,
      }
    });
  }
}