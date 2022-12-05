import { Request, Response, Router } from "express";

import transactionsRepository from "./repository";
import Transaction from "./model";

export const transactionCreate = async (req: Request, res: Response) => {
  const transaction: Transaction = req.body;
  transactionsRepository.create(transaction, (id) => {
    // const validId = database.get(
    //   "SELECT json_object('id') FROM users WHERE id= ?", (_, res) => console.log(res)
    // );

    if (id) {
      res.status(201).location(`/transaction/${id}`).send();
    } else {
      res.status(400).send();
    }
  });
};

export const transactionRead = async (req: Request, res: Response) => {
  transactionsRepository.read((transactions) => res.json(transactions));
};

export const transactionReadOne = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  transactionsRepository.readOne(id, (transaction) => {
    if (transaction) {
      res.json(transaction);
    } else {
      res.status(404).send();
    }
  });
};

export const transactionUpdate = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  transactionsRepository.update(id, req.body, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};

export const transactionDelete = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  transactionsRepository.delete(id, (notFound) => {
    if (notFound) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
};
