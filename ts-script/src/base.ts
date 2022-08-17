const exp1_string :string  = 'typescript';
const exp1_number : number =5.5;
const exp1_boolean : boolean = true;
const exp1_obj: { name: string} = { name: 'Seven'}


interface AddressInterface {
  address: string;
  city: string;
}

interface UserInterface {
  firstName:string;
  lastName: string;
  fullName: ()=> string;
  address?: AddressInterface;
}

const obj : UserInterface ={
  firstName: 'Seven',
  lastName: 'Code',
  fullName: ()=> {
    return 'seven';
  },
  // address: {
  //   address: 'street a',
  //   city: 'Feira de Santana'
  // }
  
}

console.log('obj - user', obj)

/* === OPTIONAL CHAINING (PROPOSTA PARA ECMASCRIPT ) */
// if (obj.address !== null && obj.address !== undefined){
//   const city = obj.address.city;
// }

const city = obj.address?.city;
console.log('City:', city);

const cityLabel = city ?? "no city";
console.log(cityLabel)

function addAddress(obj:UserInterface){
  obj.address = { address: 'rua x', city: 'berlin'}
}
addAddress(obj);
const cityNonNull = obj.address!.city;
console.log(cityNonNull);

const num1: number | undefined = undefined;
const num2 : number = num1!;

function soma(a:number, b: number):number{
  return a + b;
}

function fullName(firstName: string, lastName?:string):string{
  return  lastName === undefined ? firstName: `${firstName} ${lastName}`
}

console.log(fullName('Seven', 'Code'))

//Clsss
//============================
interface BaseGrudInterface {
  //create(data: {name:string; email: string; password: string}):void;
  create(data: object):void;
  fetch(filter:object): UserInterface[];
  find(id: string):UserInterface;
}

class UserGrud implements BaseGrudInterface {
    create(data: object): void {
        throw new Error("Method not implemented.");
    }
    fetch(filter: object): UserInterface[] {
        throw new Error("Method not implemented.");
    }
    find(id: string): UserInterface {
        throw new Error("Method not implemented.");
    }
}


