import { model as createModel } from 'mongoose';
import { MovieSchema, IMovie } from '../schemas/MovieSchema';

class MovieMovel {

  constructor(private _movieModel = createModel<IMovie>('movies', MovieSchema)) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this._movieModel.find();
    return movies;
  }
}