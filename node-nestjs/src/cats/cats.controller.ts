import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Cat } from 'src/interfaces/cats.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cats.dto';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param() params: { id: string; }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

}
