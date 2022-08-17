const { status } = require("@helper/Status");
const { getAll, getUnique } = require("@model/user/user");

const User = {
    async getAll(req,res){
        const statusCode = await status(res.statusCode);
        const getUsers = await getAll();
        res.json({result:getUsers});
    },
    async getUnique(req,res){
        const statusCode = await status(res.statusCode);
        if(!req.body){
            const getUser = await getUnique(req.body);
            res.json({result:getUser});
        }
        res.json({statusCode});
        
    }
}

module.exports = User;