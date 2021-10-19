import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies"
    }

    @Get('/:id')
    getOne(@Param('id') id: string){
        // return "This will return one movies with the id: ${id}";
        return `This will return one movies with the id: ${id}`;
    }
}
