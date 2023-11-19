// pages/api/email.js

import { POST } from '../../../app/api/email/route';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return POST(req, res);
  }

  // Handle other HTTP methods or return an error
  res.status(405).json({ error: 'Method Not Allowed' });
}
