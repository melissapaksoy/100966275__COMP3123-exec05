const fs = require('fs');
const path = require('path');


exports.login = (username, password) => {
    const user = readJson();
    if (user) {
        if (user.password === password && user.username === username) {
            return {
                "status": true,
                "message": "User Is valid"
            }
        }

        if (user.username !== username) {
            return {
                "status": false,
                "message": "User Name is invalid"
            }
        }

        if (user.password !== password) {
            return {
                "status": false,
                "message": "Password is invalid"
            }
        }

    }

    return {
        "status": false,
        "message": "User Name is invalid"
    }
}


function readJson() {
    const filePath = path.join(__dirname, '..', 'user.json');

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading user.json:', err);
        return null;
    }
}

