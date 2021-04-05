
const User = require("../models/user");
const bcrypt = require("bcrypt");

async function getAllUsers(req,res) {
    const users = await User.find().lean().exec()
    res.status(200).send({users})
};

async function searchUser(req,res){

    try {
        console.log("body: ",req.body);
        const body = req.body;
        User.findOne({ email: body.email }, (error, userDB) => {
            
        if (error !== null) {
            
            
            return res.status(500).json({
                                ok: false,
                                error
                            })
        }
        
        if (userDB == null) {
            
            res.json({
                ok: true,
                user: userDB
            })
        }else{
            
            return res.status(200).json({
                                ok: false,
                                message: "User already exists",
                                userDB
                            })
        }
    
        })
    } catch (error) {
        console.log(error)
            res.status(500).json({
                message: "Internal error Search"
            })
        }
}

async function getUsers(req,res) {

    try {
        console.log("getUsers");
        const {user} = req.body

        const users = await User.find({ email: user }).lean().exec()
        res.status(201).send({users})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

 async function editUser(req,res) {

    try {

        console.log("editUser");


        const body = req.body;
        const id = body.id;
        console.log("id:",id);
        console.log("body:",body);
        const userStored = await User.findByIdAndUpdate(id, body, {useFindAndModify: false})

        res.status(201).send({userStored})

        console.log("userStored:",userStored);

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


async function addUser(req,res) {

    try {

        let body = req.body;

        let user = new User({
          name: body.name,
          surname: body.surname,
          email: body.email,
          address: body.address,
          password: bcrypt.hashSync(body.password, 10),
          role: body.role,
        });
      
        const userStored = await user.save();
        res.status(201).send({userStored})

    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


module.exports = {
    addUser,
    editUser,
    getUsers,
    getAllUsers,
    searchUser
}