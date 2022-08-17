export type UserInput = {
  name:string;
  age: number;
}

export class User {
  name:string;
  age:number;

  constructor(user:{name:string, age:number}){
    this.name =user.name;
    this.age = user.age;
  }

  listUser(){
    return {
      name:this.name,
      age: this.age,
    }
  }
}

interface UserRepository  {
  save(user:User):Promise<void> ;
  listAll():Promise<User[]>;
}


type CreateUserInput =  {
  name:string;
  age:number;
}


type CreateUserOutput =  {
  name:string;
  age:number;
}

export class CreateUserUseCase {
  constructor(private repoUser:UserRepository){}
  async  execute(user:CreateUserInput):Promise<CreateUserOutput>{
    const newUser = new User(user);
     await this.repoUser.save(newUser);
    return newUser.listUser();
  }
}

export class ListAllUserUseCase {
  constructor(private repoUser:UserRepository){}
  async  execute():Promise<{name:string,age:number}[]>{
    const users =  await this.repoUser.listAll();
    return users.map(u => u.listUser())
  }
}

export class UserRepositoryInMemory implements UserRepository {
    private item: User[] = [];
   async save(user:  User): Promise<void> {
      this.item.push(user);
    }

   async listAll():Promise<User[]> {
    return this.item;
    }
}
