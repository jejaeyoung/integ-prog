const express = require("express");
const app = express ();
const port = 8000;
const faker = require("faker");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//sample response
app.get("/api/show/wew",(req,res)=>{
    res.json({
        message:"Hey",
        person:"Karlo Emil",
        age:32,
        isGraduate: true, 
    })
    console.log("Somebody Tried to access my wew api");
});

app.get("/api/display/weather",(req,res)=>{
    res.json({
        message:"its rainy!",
        tools:["umbrella","cap","boots"]
    })
});
//QA Testers - They are assigned to implement data set if the handling speed or code is efficient.
//using Faker Api
//get
const createRandomShow =(val)=>{
    
    let collectAccounts=[];
    for (i=0; i<val; i++)
    {
        const newAccount ={
            firstName:faker.name.firstName(),
            lastName:faker.name.lastName(),
            email:faker.internet.email(),
            mobilenumber:faker.phone.phoneNumber(),
            city: faker.address.cityName()
        }
        collectAccounts.push(newAccount)
    }
    return collectAccounts;
}
app.get("/api/profile/show",(req,res)=>{
    res.json(createRandomShow(100))

    console.log(faker.name.firstName());
})

//post
app.post("/api/profile/new",(req,res)=>{
    res.json({
        status:"registered a new account",
        
    })

    console.log(req.body);
})

app.listen(port, ()=>{
    console.log('You are connected to Local Hosts ' + port);
})