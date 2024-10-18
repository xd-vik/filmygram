const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');   
const cors = require('cors');
const user = require('./routes/user');
app.use(cors());

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/api/v1',user);
// GET route for the homepage ( ispe dhyaan mat do ye ejs dashboard hai checking ke liye)
app.get("/api", (req, res) => {
    res.render('index');
});





// Start the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// (ispe bhi dhyan mat do ye database dekhane ke liye hai entry kitni hai)
app.get('/api/read', async (req,res)=>{
    let allUser = await userModel.find();
    res.send(allUser);
})
