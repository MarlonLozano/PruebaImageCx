import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto, EditUserDto } from './dtos/index';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor (private readonly userService:UserService){}

    @Get()
    getMany(){
        return this.userService.getMany();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id:number){
        return this.userService.getOne(id);
    }

    @Post()
    createOne(
        @Body() dto: CreateUserDto

    ){
        return this.userService.creteOne(dto);
    }

    @Put(':id')
    editOne(@Param('id', ParseIntPipe) id:number, dto:EditUserDto){
        return this.userService.editOne(id,dto);
    }


    @Delete(':id')
    deleteOne(@Param('id',ParseIntPipe) id:number){
        return this.userService.deleteOne(id)
    }
}
