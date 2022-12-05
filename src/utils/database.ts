import sqlite3 from 'sqlite3';
const DBSOURCE = 'db.sqlite';


const SQL_CREATE_USERS = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
  );
`

const SQL_CREATE_TRANSACTIONS = `
  CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(25) NOT NULL,
    value FLOAT NOT NULL,
    payd BOOLEAN NOT NULL,
    dateTransaction TEXT NOT NULL,
    category VARCHAR(30) NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
  );
`

const database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Base de dados conectada com sucesso.');

    database.run(SQL_CREATE_TRANSACTIONS, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
      } else {
        console.log('Tabela de transações criada com sucesso.');
      }
    })
    database.run(SQL_CREATE_USERS, (err) => {
      if (err) {
        // Possivelmente a tabela já foi criada
      } else {
        console.log('Tabela de usuários criada com sucesso.');
      }
    })
  }
});
export default database;
