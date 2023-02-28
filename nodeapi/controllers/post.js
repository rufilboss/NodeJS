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
    // console.log('CREATING POST: ', req.body);
    post.save((err, result) => {
        if (err) {
            res.status(400).json({
                error: err
            });
        }
        res.status(200).json({
            post: result
        })
    });
};
