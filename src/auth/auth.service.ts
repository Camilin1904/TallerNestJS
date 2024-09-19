import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(@InjectableRepository(User) private readonly userRepository:Repository<User>){}

    createUser(createUserDto: CreateUserDto){
        
    }
}
function InjectableRepository(user: typeof User): (target: typeof AuthService, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}

