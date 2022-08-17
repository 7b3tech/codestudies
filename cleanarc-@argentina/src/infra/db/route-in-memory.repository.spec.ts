import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe('RouteInMemoryRepository', () => {

  test('should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'My route',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    }
    const route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.item).toHaveLength(1);
    expect(repository.item).toStrictEqual([route]);
  })

}
)
