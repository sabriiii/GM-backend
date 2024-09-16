const express = require('express');
const router = express.Router();
const multer = require('multer');
const articleController = require('../controllers/articles.controller');

const upload = multer({ storage: multer.memoryStorage() })

router.post('/', upload.single('filename') ,articleController.createArticle);
router.get('/' ,articleController.getListArticles);
router.get('/:id' ,articleController.getArticleById);

module.exports = router;