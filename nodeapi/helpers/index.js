const { check } = require("express-validator");

exports.createPostValidator = (res, req, next) => {
    // title 
    req.check("title", "This most not be blank").notEmpty();
    req.check("title", "Characters too short, input between 3 to 33").isLength({
        min: 3,
        max: 33
    });
    // body
    req.check("body", "This most not be blank").notEmpty();
    req.check("body", "Characters too short, input between 3 to 33").isLength({
        min: 3,
        max: 333
    });

};