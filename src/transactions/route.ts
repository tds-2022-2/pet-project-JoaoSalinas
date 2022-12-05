import { Router } from 'express';
import {
  transactionCreate,
  transactionRead,
  transactionReadOne,
  transactionUpdate,
  transactionDelete} from './controller'


const transactionsRouter = Router();

transactionsRouter
  .post('/', transactionCreate)
  .get('/', transactionRead)
  .get('/:id', transactionReadOne)
  .put('/:id', transactionUpdate)
  .delete('/:id', transactionDelete);

  export default transactionsRouter
