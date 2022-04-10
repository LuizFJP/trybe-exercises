import MovieService from '../services/MovieService';
import { Response, Request } from 'express';

class MovieController {
  constructor(private _movieService = new MovieService()) {}

  public notFound = 'Movie not found';
  public internalError = 'Internal server error';

  public getMovies = async(req: Request, res: Response): Promise<Response> => {
    try {
      const movies = await this._movieService.getMovies();

      return res.status(200).send(movies);
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }
}

export default MovieController;
