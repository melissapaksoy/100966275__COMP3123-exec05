var express = require('express');
const router = express.Router();
const path = require('path');
const user_controller = require('../controllers/users');

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'user.json'));
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req, res) => {
    var {username, password} = req.body;
    var result = user_controller.login(username, password);
    res.json(result);
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
    var username = req.params.username;

    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router