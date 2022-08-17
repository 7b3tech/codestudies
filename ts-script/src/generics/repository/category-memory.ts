import { Category, CategoryRepository } from "../entity/category";

type CategoriesMemoryDB ={
  Categories: Category[]
}


class CategoryRepositoryMemory implements CategoryRepository  {
  get(id: string): Category {
      throw new Error("Method not implemented.");
  }
  Create(category: Category): Category {
      this.db.push(category);
    return 
  }
  constructor(db: CategoriesMemoryDB){
  }
}
