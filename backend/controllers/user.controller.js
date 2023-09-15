const User = require("../models/user.model");

exports.creat = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        roles: [{id : 1 , name : "ROLE_USER"}]
    });
    user.save()
        .then(() => res.status(200).json({message : 'user created', user}))
        .catch(error => res.status(400).json({error}))
}

exports.getAll = (req, res) => {
    //res.send('get data for user')
    User.find()
        .then(users => res.status(200).json( users ))
        .catch(error => res.status(400).json({ error }))
}

exports.getById = (req, res) => {
    //res.send('get data for users'): fait sortir du programme
    User.findOne({_id: req.params.id})
        .then( users => res.status(200).json(users))
        .catch( error => res.status(400).json({error}))
}

exports.modify =  (req, res) => {
    // User.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
    //   .then(() => res.status(200).json({message : 'user modified'}))
    // .catch(error => res.status(400).json({error}));
    // or use findOneAndUpdate()
    User.findOneAndUpdate({_id:req.params.id}, {...req.body, _id:req.params.id}, {new : true})
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(400).json({error}));
}

exports.toDelete =  (req,res)=>{
    User.deleteOne({_id:req.params.id})
        .then(()=>res.status(200).json({message : 'user deleted'}))
        .catch( (error) => res.status(400).json(error));
}
