const express = require('express');
const router = express.Router();

const authorController = require("../Controllers/authorController")
const bookController = require("../Controllers/bookController")
const userController = require("../Controllers/userController")

const { authentication } = require("../middleware/auth");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/create", userController.createUser)
router.post("/login", userController.loginUser)

router.post('/createAuthor',authentication,authorController.createAuthor)
router.post('/createBook',authentication,bookController.createBook)
router.get("/create/bookDetails",bookController.getBookbyauthor)
router.delete('/creteBook/:bookId',bookController.deletedBook)




module.exports = router;