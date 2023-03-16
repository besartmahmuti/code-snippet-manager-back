"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Home');
});
router.get('/login', (req, res) => {
    res.send('Login');
});
router.get('/register', (req, res) => {
    res.send('Register');
});
exports.default = router;
