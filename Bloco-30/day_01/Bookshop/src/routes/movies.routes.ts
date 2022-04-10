import { Router } from 'express';
import MovieController from '../controllers/MovieController';

const route = Router();
const movie = new MovieController();


route.get('/', movie.getMovies);

export default route;
