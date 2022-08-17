import { Photo } from "./entity/Photo";
import { AppDataSource} from './index'

const photo = new Photo();
photo.name = "Seven on the moon"
photo.description = "I got to moon on SpaceX"
photo.filename = "seve-on-the-moon.jpg"
photo.views= 1
photo.isPublished = true;

//$const savePhoto = async ()=> {

 AppDataSource.manager.save(photo)
console.log("Photo was been saved. Photo id is", photo.id)
//}
//jjsavePhoto()



// AppDataSource.initialize()
//     .then(() => {
//         // here you can start to work with your database
//     })
//     .catch((error) => console.log(error))
