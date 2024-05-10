import express, { Request, Response } from 'express';
import { userService } from 'services';

const router = express.Router();

// Get all users
router.get('/', async (req: Request, res: Response) => {
  //   const userRepository = getRepository(User);
  //   const users = await userRepository.find();
  //   res.json(users);

  const resp = await userService.findUser();

  return res.json(resp);
});

router.get('/', async (req: Request, res: Response) => {
  //   const userRepository = getRepository(User);
  //   const users = await userRepository.find();
  //   res.json(users);

  const resp = await userService.findUser();

  return res.json(resp);
});

// // Create a new user
// router.post('/', async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   const userRepository = getRepository(User);
//   const newUser = userRepository.create({ name, email });
//   await userRepository.save(newUser);
//   res.status(201).json(newUser);
// });

// // Get user by ID
// router.get('/:id', async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const user = await userRepository.findOne(req.params.id);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   res.json(user);
// });

// // Update user by ID
// router.put('/:id', async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   const userRepository = getRepository(User);
//   const user = await userRepository.findOne(req.params.id);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   user.name = name;
//   user.email = email;
//   await userRepository.save(user);
//   res.json(user);
// });

// // Delete user by ID
// router.delete('/:id', async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const user = await userRepository.findOne(req.params.id);
//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }
//   await userRepository.remove(user);
//   res.json({ message: 'User deleted' });
// });

export { router as userRouter };
