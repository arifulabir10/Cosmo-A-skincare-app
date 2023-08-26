
import { connectToDatabase } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { productId, userId } = req.body;

    try {
      const { connection } = await connectToDatabase();

      await connection.query(
        `INSERT INTO cart (cart_id, user_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE user_id = ?`,
        [userId, userId, userId]
      );

      await connection.query(
        `INSERT INTO added (num_of_prodcuts, product_id, cart_id) VALUES (?, ?, ?)`,
        [1, productId, userId]
      );

      res.status(200).json({ message: 'Product added to cart.' });
    } catch (error) {
      console.error('Error adding product to cart:', error);
      res.status(500).json({ error: 'An error occurred while adding the product to cart.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
