//import crypto from 'crypto';
export class User  {
  id: string;
  name: string;
  constructor( input: {id: string,  name:string}){
    this.id= input.id; this.name = input.name
  }

  toJSON(){
    return {
      id: this.id,
      name:this.name,
    }
  }
}

export interface UserRepositoryInterface {
  insert(user:User):Promise<void>;
  findAll():Promise<User[]>;
}

export class CreateUserCase {
  constructor(private userRepo: UserRepositoryInterface){}
  async execute(input:CreateUserInput): Promise<CreateUserOuput>{
    const user = new User(input);
    await this.userRepo.insert(user);
    return user.toJSON();
    }
}

export class ListAllUsersUseCase {
  constructor(private routeRepo: UserRepositoryInterface) { }
  async execute(): Promise<CreateUserOuput[]> {
    const users = await this.routeRepo.findAll();
    return  users.map(u => u.toJSON());
  }
}

type CreateUserInput ={
  id: string;
  name: string;
}

type CreateUserOuput ={
  id: string;
  name: string;
}

export class UserMemoryRepository implements UserRepositoryInterface{
  item : User[] = [];
    async insert(user: User): Promise<void> {
      this.item.push(user);
    }

   async findAll(): Promise<User[]> {
      return this.item;
    }

}

const userRepo = new UserMemoryRepository();
const createUserCase = new CreateUserCase(userRepo)
const listAllUserCase = new ListAllUsersUseCase(userRepo)

const output = async ()=>{
    await createUserCase.execute({id:'1', name:'Seven'})
    await createUserCase.execute({id:'2', name:'Julia'})
    await createUserCase.execute({id:'3', name:'Luna'})
    await createUserCase.execute({id:'4', name:'Maylla'})
    const users = await listAllUserCase.execute();
    console.log(users)
}

output();
