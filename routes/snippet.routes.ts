import { Request, Response, Router } from "express"

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Get all Snippets')
  });

router.get('/byId', (req: Request, res: Response) => {
    res.send('Get snippet by id')
  });

router.get('/add', (req: Request,  res: Response)=>{
    res.send('Add snippet')
})
router.get('/edit', (req: Request,  res: Response)=>{
    res.send('Edit snippet')
})


export default router