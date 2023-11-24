const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./db/conn');
const path = require('path');
const userData = require('./models/user');

const staticPath = path.join(__dirname,'/public');
app.use(express.static(staticPath));
app.set("view engine" , "hbs");

app.get('/', async (req,res) => {
    res.render("index")
});
app.use(express.urlencoded({extended : false}));

app.post('/userData', async (req,res) => {
    try{
    res.send(req.body.name);
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if(password === cpassword){
        const userDetails = new userData({
            name : req.body.name,
            email : req.body.email,
            phone: req.body.phone,
            password : password,
            cpassword : cpassword
        });

        const postData = await userDetails.save();
        res.status(201).render("home");
        res.send(postData);
        console.log(postData);
    }else{
        res.send('passwords are not matching');
    }
} catch(error){
    res.send(error);
}
})

app.listen(port,() => {
    console.log(`listening to the port at ${port}`);
})