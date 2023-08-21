"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.get('/login', (req: Request, res: Response) => {
//     res.send('Loginss')
//   });
// router.get('/register', (req: Request, res: Response) => {
//   res.send('Register')
// });
router.get('/edit', (req, res) => {
    res.send('Edit');
});
exports.default = router;
