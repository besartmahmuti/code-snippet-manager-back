"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Get all Snippets');
});
router.get('/byId', (req, res) => {
    res.send('Get snippet by id');
});
router.get('/add', (req, res) => {
    res.send('Add snippet');
});
router.get('/edit', (req, res) => {
    res.send('Edit snippet');
});
exports.default = router;
