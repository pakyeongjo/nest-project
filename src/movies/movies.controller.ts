import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { retry } from 'rxjs';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll(): Movie[]{
        // return "This will return all movies";
        return this.moviesService.getAll();
    }

    // @Get("search")
    // search(@Query("year") searchYear){
    //     // return "searching..."
    //     return `searching... ${searchYear}`
    // }

    @Get('/:id')
    getOne(@Param('id') id: string): Movie{
        // return "This will return one movies with the id: ${id}";
        // return `This will return one movies with the id: ${id}`;
        return this.moviesService.getOne(id)
    }

    @Post()
    create(@Body() movieData){
        // return 'This will create a movie';
        // return movieData;
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') id: string){
        // return `This will delete a movie with the id: ${id}`;
        return this.moviesService.deleteOne(id);
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
