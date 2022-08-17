import { CreateUserUseCase, ListAllUserUseCase, User,  UserRepositoryInMemory } from "./user";

describe('Repository Pattern', () => {

  it('constructor', () => {
    let user = {name:'seven',age:50};
    let newUser = new User(user);
    expect(newUser.listUser()).toStrictEqual(user)
  })


  it('CreateUserUseCase', async() => {
    const userRepository = new UserRepositoryInMemory(); 

    const user = {name:'seven',age:50};

    const createUser = new CreateUserUseCase(userRepository); 
    await createUser.execute(user);

    const users = await userRepository.listAll();
    const allUsers =  users.map(u => u.listUser())

    expect(allUsers).toHaveLength(1);
    expect(user).toStrictEqual(allUsers[0])
  })


  it('ListAllUserUseCase', async() => {
    const userRepository = new UserRepositoryInMemory(); 
    
    const user1 = {name:'seven',age:50};
    const user2 = {name:'dengo',age:45};
    const user3 = {name:'Maylla',age:5};
    const user4 = {name:'Luna',age:14};
    const user5 = {name:'Júlia',age:16};
    const listUsers = [ user1,user2,user3,user4,user5];


    const createUser = new CreateUserUseCase(userRepository); 
    await createUser.execute(user1);
    await createUser.execute(user2);
    await createUser.execute(user3);
    await createUser.execute(user4);
    await createUser.execute(user5);

    const listAllUser = new ListAllUserUseCase(userRepository)
    

    expect(await listAllUser.execute()).toHaveLength(5);
    expect(listUsers).toStrictEqual(await listAllUser.execute())
  })
  })
