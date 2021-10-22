import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { retry } from 'rxjs';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
    getOne(@Param('id') id: number): Movie{
        // return "This will return one movies with the id: ${id}";
        // return `This will return one movies with the id: ${id}`;
        return this.moviesService.getOne(id)
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        // return 'This will create a movie';
        // return movieData;
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') id: number){
        // return `This will delete a movie with the id: ${id}`;
        return this.moviesService.deleteOne(id);
    }

    @Patch(":id")
    patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
        // return `This will patch a movie with the id: ${id}`;
        // return {
        //     updateMovie: id,
        //     updateData
        // }
        return this.moviesService.update(id, updateData);
    }
}
