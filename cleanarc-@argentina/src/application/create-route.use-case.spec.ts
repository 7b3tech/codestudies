import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use.case"

describe('CreateRouteUseCase', () => {
  it('should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
    })
    expect(repository.item).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.item[0].id,
      title: 'my title',
      startPosition: { lat: 1, lng: 2 },
      endPosition: { lat: 3, lng: 4 },
      points: []
    })

  })

})
