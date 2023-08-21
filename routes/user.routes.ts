import { Request, Response, Router } from "express"

const router = Router()

// router.get('/login', (req: Request, res: Response) => {
//     res.send('Loginss')
//   });

  // router.get('/register', (req: Request, res: Response) => {
  //   res.send('Register')
  // });

  router.get('/edit', (req: Request, res: Response) => {
    res.send('Edit')
  });




export default router