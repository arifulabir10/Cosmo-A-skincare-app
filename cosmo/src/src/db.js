
import mysql from 'mysql';

export function connectToDatabase() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmo'
  });

  connection.connect();

  return { connection };
}
