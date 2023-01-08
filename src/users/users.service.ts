import { Injectable } from '@nestjs/common';

export type User = any;

interface UserData {
    email: "string", 
    password: "string", 
    firstName: "string", 
    lastName: "string" 
}

@Injectable()
export class UsersService {
	private readonly users = [
        {
            id: 1,
            email: 'mail1@amil.ru',
            password: 'changeme',
            firstName: 'mogol',
            lastName: 'gogol'
        },
        {
            id: 2,
            email: 'mail2@amil.ru',
            password: 'guess',
            firstName: 'biba',
            lastName: 'boba'
        },
    ];


    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }

    async addOne(data: UserData): Promise<User | undefined> {
        console.log('addone' + data.email);
        this.users.push({id: this.users.length, email: data.email, password: data.password, firstName: data.firstName, lastName: data.lastName});
        return this.users[this.users.length - 1]
    }
}
