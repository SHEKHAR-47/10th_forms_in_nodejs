const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendFile('')

})


app.post('/adduser',function(req,res){
    const newUser ={
        name:req.body.username,
        age:req.body.age,
        phone:req.body.phone,
        email:req.body.email,
        address:req.body.address
    };
    var jsonContent=JSON.stringify(newUser);

    fs.writeFile('Users.json',jsonContent, function(err) {
        if(err){
            console.log('Error');
        }
        else{
            res.redirect('/');

        }
    })
})

app.listen(3000,function(){
    console.log("node server is running")
})
