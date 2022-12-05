import database from "../utils/database";
import Transaction from "./model";

const transactionsRepository = {
  create: (transaction: Transaction, callback: (id?: number) => void) => {
    const sql = 'INSERT INTO transactions (type, value, payd, dateTransaction, category, description, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const params = [transaction.type, transaction.value, transaction.payd, transaction.dateTransaction, transaction.category, transaction.description, transaction.user_id];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  read: (callback: (transactions: Transaction[]) => void) => {
    const sql = 'SELECT * FROM transactions'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
  },
  readOne: (id: number, callback: (transaction?: Transaction) => void) => {
    const sql = 'SELECT * FROM transactions WHERE id = ?'
    const params = [id]
    database.get(sql, params, (_err, row) => callback(row))
  },
  update: (id: number, transaction: Transaction, callback: (notFound: boolean) => void) => {
    const sql = 'UPDATE transactions SET type = ?, value = ?, payd = ?, dateTransaction = ?, category = ?, description = ?, user_id = ? WHERE id = ?'
    const params = [transaction.type, transaction.value, transaction.payd, transaction.dateTransaction, transaction.category, transaction.description, transaction.user_id, id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
  delete: (id: number, callback: (notFound: boolean) => void) => {
    const sql = 'DELETE FROM transactions WHERE id = ?'
    const params = [id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
};
export default transactionsRepository;
