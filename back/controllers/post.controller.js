const PostModel = require("../models/post.model");


module.exports.readPost = (req, res) => {
  PostModel.find().sort({ createdAt : -1 })
  .then(findPosts => {
    res.status(200).json({findPosts})
  })
  
  .catch(error => res.status(404).json({ error }))
};



module.exports.createPost = (req, res) => {
  const newPost = new PostModel({
  nom: req.body.nom,
  prenom : req.body.prenom,
  email : req.body.email,
  message : req.body.message
  })
  newPost.save()
  .then((postCreated) => { 
    res.status(200).json({postCreated});
  })
  .catch(error =>res.status(400).json({ error }))
}
