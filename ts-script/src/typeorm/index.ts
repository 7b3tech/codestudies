import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo";


AppDataSource.initialize()
    .then(async () => {


const photo = new Photo();
photo.name = "Seven on the moon"
photo.description = "I got to moon on SpaceX"
photo.filename = "seve-on-the-moon.jpg"
photo.views= 1
photo.isPublished = true;

await AppDataSource.manager.save(photo)
console.log("Saved a new picture", photo.name)
const u = await AppDataSource.manager.find(Photo)        // here you can start to work with your database
console.log("Load photo", u)
    })
    .catch((error) => console.log(error))




