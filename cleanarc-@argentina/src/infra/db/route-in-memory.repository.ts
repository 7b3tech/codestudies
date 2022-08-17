import { Route } from "../../domain/route.entity";
import { RouteRepositoryInterface } from "../../domain/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
  item: Route[] = [];
  async insert(route: Route): Promise<void> {
    this.item.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.item;

  }
}
