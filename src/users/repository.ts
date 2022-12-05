import User from './model';
import database from '../utils/database';

const usersRepository = {
  create: (user: User, callback: (id?: number) => void) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const params = [user.name, user.email];

    database.run(sql, params, function (_err, ) {
      callback(this?.lastID);
    });
  },
  read: (callback: (users: User[]) => void) => {
    const sql = 'SELECT * FROM users'
    const params: any[] = []
    database.all(sql, params, (_err, rows) => callback(rows))
  },
  readOne: (id: number, callback: (user?: User) => void) => {
    const sql = 'SELECT * FROM users WHERE id = ?'
    const params = [id]

    database.get(sql, params, (_err, row) => callback(row))
  },
  update: (id: number, user: User, callback: (notFound: boolean) => void) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?'
    const params = [user.name, user.email, id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
  updateEmail: (id: number, user: User, callback: (notFound: boolean) => void) => {
    const sql = 'UPDATE users SET email = ? WHERE id = ?'
    const params = [ user.email, id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
  delete: (id: number, callback: (notFound: boolean) => void) => {
    const sql = 'DELETE FROM users WHERE id = ?'
    const params = [id]
    database.run(sql, params, function (_err) {
      callback(this.changes === 0)
    })
  },
};
export default usersRepository;
