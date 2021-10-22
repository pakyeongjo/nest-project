import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie{
        // return this.movies.find(movie => movie.id === parseInt(id))
        const movie =  this.movies.find(movie => movie.id === parseInt(id));
        if (!movie) {
            throw new NotFoundException(`Does not exist ${id} movie `);
        }
        return movie
    }

    deleteOne(id: string) {
        // this.movies.filter(movie => movie.id !== +id);
        // return true;
        this.getOne(id);
        this.movies.filter(movie => movie.id !== +id);
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }
}
