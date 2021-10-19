import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchYear){
        // return "searching..."
        return `searching... ${searchYear}`
    }

    @Get('/:id')
    getOne(@Param('id') id: string){
        // return "This will return one movies with the id: ${id}";
        return `This will return one movies with the id: ${id}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
        // return 'This will create a movie';
    }

    @Delete(":id")
    remove(@Param('id') id: string){
        return `This will delete a movie with the id: ${id}`;
    }

    @Patch(":id")
    patch(@Param('id') id: string, @Body() updateData) {
        // return `This will patch a movie with the id: ${id}`;
        return {
            updateMovie: id,
            updateData
        }
    }
}
