const express = require("express");
const app = express ();
const port = 8000;
const faker = require("faker");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Create User Object
const createUser =()=>{
    const newUser ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    }
    return newUser;
}

//Create Company Object
const createCompany =()=>{
    const newCompany ={
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address:{
                    street: faker.address.streetName(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCodeByState(),
                    country: faker.address.country()
                }
    
    }
    return newCompany;
}

//API Route for New Users
app.get("/api/users/new",(req,res)=>{
    res.json(createUser())
    console.log("Successfully Retrieved - New User");
});

//API Get Route for New Company 
app.get("/api/companies/new",(req,res)=>{
    res.json(createCompany())
    console.log("Successfully Retrieved - New Company");
});

//API Get route for New Users and Company
app.get("/api/user/company",(req,res)=>{
    res.json(
                {
                    user: createCompany(),
                    company: createCompany()
                }    
            )
    console.log("Successfully Retrieved - Both  New User and New Company");
});




app.listen(port, ()=>{
    console.log('You are connected to Local Hosts ' + port);
})