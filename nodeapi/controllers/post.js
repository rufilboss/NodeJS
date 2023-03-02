const Post = require('../models/post')

exports.getPost = (req, res) => {
    res.json({
        posts: [
            {'title': 'First Test'},
            {'subtitle': 'Secound Test'}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post (req.body);
    post.save()
    .then(result => {
        res.status(200).json({
            post: result
        });
    });
};
