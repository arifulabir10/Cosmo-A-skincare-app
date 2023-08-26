import mysql from 'mysql';

export default async function handler(req, res) {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cosmo'
  });

  connection.connect();

  if (req.method === 'GET') {
    const { query } = req.query;

    try {
      connection.query(
        `SELECT * FROM product WHERE product_name LIKE ? OR product_category LIKE ? OR product_description LIKE ?`,
        [`%${query}%`, `%${query}%`, `%${query}%`],
        (error, results) => {
          if (error) {
            res.status(500).json({ error: 'An error occurred while searching for products.' });
          } else {
            res.status(200).json({ products: results });
          }
        }
      );
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while searching for products.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }

  connection.end();
}
