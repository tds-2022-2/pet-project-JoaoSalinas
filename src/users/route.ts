import { Router } from 'express'

import {
  userCreate,
  userRead,
  userReadOne,
  userUpdate,
  userUpdateEmail,
  userDelete
} from './controller'


const usersRouter = Router();

usersRouter
  .post('/', userCreate)
  .get('/', userRead)
  .get('/:id', userReadOne)
  .put('/:id', userUpdate)
  .patch('/:id', userUpdateEmail)
  .delete('/:id', userDelete);

  export default usersRouter
