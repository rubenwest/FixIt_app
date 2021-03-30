const express = require("express");
const router = express.Router();

const {addUser, getUsers, editUser, getAllUsers, searchUser } = require('../controllers/userController');


//Creamos el metodo get

//creamos el metodo post

router.post('/newUser', addUser);
router.post('/loadUsers', getUsers);
router.post('/search', searchUser);
router.get('/',getAllUsers);
router.post("/editUser", editUser);

router.delete("/", (req,res) => {
    res.json("DELETE USER");
})

module.exports = router;
