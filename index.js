// index.js - Add this at the bottom
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Only listen if running directly (not in tests)
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Server running'));
}

export default app;