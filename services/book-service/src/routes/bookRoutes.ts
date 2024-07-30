import { Router } from 'express';
import * as bookController from '../controllers/bookController';
const router = Router();

router.get('/', bookController.getBooks);
router.get('/:isbn', bookController.getBookByISBN);
router.post('/', bookController.addBook);
router.put('/:isbn', bookController.updateBook);
router.delete('/:isbn', bookController.deleteBook);

export default router;
