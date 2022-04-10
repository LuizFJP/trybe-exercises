import booksRoute from './books.routes';
import moviesRoute from './movies.routes';
import { Router } from 'express';

const route = Router();

route.use('/books', booksRoute);
route.use('/movies', moviesRoute);

export default route;
