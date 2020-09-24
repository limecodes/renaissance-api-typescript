import { Request, Response } from 'express';

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  res.json({ userController: 'getAllUsers' }).status(200);
};

export default {
  getAllUsers,
};
