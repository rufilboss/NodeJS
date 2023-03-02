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
    // Check for errors
    const errors = req.validationErrors()
    // If error show the first one as dey happen
    if (errors) {
        const firstError = errors.map((errors) => error.msg)[0];
        return res.status(400).json({error: firstError})
    };
    // Contiue
    next();
};