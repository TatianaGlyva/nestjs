import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';

const allUsers = [
    { id: 32, name: '1'},
    { id: 33, name: '2'},
    { id: 34, name: '3'}];

@Controller('users')

export class TestController {
    @Get(':id')
        getHello(@Param('id') id){
        return allUsers.find( el => el.id === Number(id))
    }

    @Post('add')
        postUser(@Body() body: any){
            allUsers.push(body);
            return allUsers;
    }

    @Get('')
        getUsers(@Query() query: any) {
        console.log(query);
        return allUsers.filter(el => el.id >= Number(query.from) && el.id <= Number(query.to))
    }
}