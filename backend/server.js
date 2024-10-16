const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');   
const bcrypt = require('bcrypt');
const cors = require('cors');
app.use(cors());

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// GET route for the homepage ( ispe dhyaan mat do ye ejs dashboard hai checking ke liye)
app.get("/api", (req, res) => {
    res.render('index');
});

// Login route
app.post('/api/login', async (req, res) => {
    let { userid, password } = req.body;
    // console.log(userid,password);
    try {
        const user = await userModel.findOne({ userid:userid });
        // console.log(user)
        if (!user) {
            return res.status(422).json({ message: 'Invalid user ID or password' });
        }
        bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            // console.log(result)
            if (!result) {
                return res.status(422).json({ message: 'Invalid user ID or password' });
            }
        });
        // If login is successful, send a success response
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal serverrrr error' });
    }
});

// (ispe bhi dhyan mat do ye database dekhane ke liye hai entry kitni hai)
app.get('/api/read', async (req,res)=>{
    let allUser = await userModel.find();
    res.send(allUser);
})

// Start the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
