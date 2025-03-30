const fs = require('fs');
const path = './db.json'; // Path to your database file

let db;
try {
    db = JSON.parse(fs.readFileSync(path, 'utf-8'));
} catch (err) {
    // If file doesn't exist or is invalid, initialize the database with a default structure
    db = {
        data: {
            chats: {},
            users: {}
        }
    };
    fs.writeFileSync(path, JSON.stringify(db, null, 2)); // Create file with default structure
}

module.exports = db;