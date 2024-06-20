 const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const SongUserModel = mongoose.model('songUser', userSchema);



 const userRouter = express.Router();
 //sign in
 userRouter.post('/signin', async (req, res) => {
    try {
        const payload = req.body;
        const condition = {
            username: payload.username,
            password: payload.password
        };
        const result = await SongUserModel.findOne(condition);
        const status = result !== null;
        res.json({
            status: status,
            msg: status? 'authentication successfull':'authentication Failed',
            data: result
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'authentication failed',
            data: error
        });
    }
});

 //sign up

 userRouter.post('/signup', async (req, res) => {
    try {
        const payload = req.body;
        const condition = {
            username: payload.username,
            password: payload.password
        };
        const result = await SongUserModel.create(condition);
       
        res.json({
            status: true,
            msg: 'User created successfull',
            data: result
        });
    } catch (error) {
        res.json({
            status: false,
            msg: 'authentication failed',
            data: error
        });
    }
});

 //update count

 userRouter.all("*",(req,res) =>{
    res.status(404).send("page not found")
 }
);


module.exports = userRouter;