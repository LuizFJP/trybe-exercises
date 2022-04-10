  // src/routes.ts

  import { Router } from 'express';

  import BookController from '../controllers/BookController';

  const bookController = new BookController();
  const routes = Router();

  const booksId = '/:id';

  routes.get('/', bookController.getBooks);
  // routes.post('/', bookController.create);
  // routes.put(booksId, bookController.updateBook);
  // routes.delete(booksId, bookController.deleteBook);
  // routes.get(booksId, bookController.getBook);

  export default routes;
