import { RequestHandler } from 'express';

const getExample: RequestHandler = (req, res) => {
  res.json({ res: 'example' });
};

export default {
  getExample,
};
