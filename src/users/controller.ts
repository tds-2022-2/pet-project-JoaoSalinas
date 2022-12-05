import { Request, Response } from 'express';

import usersRepository from './repository';
import User from './model'

export const userCreate = async (req: Request, res: Response) => {
  const user: User = req.body;
  usersRepository.create(user, (id) => {
    if (id) {
      res.status(201).location(`/user/${id}`).send();
    } else {
      res.status(400).send();
    }
  })
};


export const userRead = async (req: Request, res: Response) => {
  usersRepository.read((users) => res.json(users))
};


export const userReadOne = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  usersRepository.readOne(id, (user) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).send();
    }
  });
};


export const userUpdate = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  usersRepository.update(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};

export const userUpdateEmail = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  usersRepository.updateEmail(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};


export const userDelete = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  usersRepository.delete(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};
