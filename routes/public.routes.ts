import { Request, Response, Router } from "express"

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Home')
  });

// router.get('/login', (req: Request, res: Response) => {
//     res.send('Loasdasdgin')
//   });

// router.get('/register', (req: Request,  res: Response)=>{
//     res.send('Reasdasdgister')
// })

export default router