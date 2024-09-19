import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService){}
    @Post('register')
    createUser(@Body() creatUserDto:CreateUserDto){
        return this.authService.createUser(creatUserDto);
    }

}
