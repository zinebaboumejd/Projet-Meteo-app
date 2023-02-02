
const asyncHandler = require("express-async-handler");


const get = asyncHandler(async (req, res) => {
   
    res.json('hello');
    // res.json(
    //     {
    //         "name": "John",
    //         "age": 30
    //     }  
    // );
    }
);

module.exports = {
    get
}


