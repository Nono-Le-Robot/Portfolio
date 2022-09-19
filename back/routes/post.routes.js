const router = require('express').Router();
const postController = require('../controllers/post.controller')



router.get("/messages/", postController.readPost)
router.post("/messages/", postController.createPost)

module.exports = router;