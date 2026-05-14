import express from 'express';

const app = express();

//middleware to get user data
app.use(express.urlencoded({extended:true}))

//MATCH MAKER APP
app.get('/', (req, res)=>{

res.render("match.ejs")
})

app.post('/match', (req, res)=>{
   const person1 = req.body.urName
   const person2 = req.body.LoverName
   const score = Math.floor(Math.random() * 100) + 1;
res.render("matchResult.ejs",{person1:person1, person2:person2, score:score})
})

//NAME LENGTH
app.get('/length',(req, res)=>{
res.render("nameLength.ejs")
})

app.post("/namelength", (req, res)=>{

    const firstName = req.body.fName;
    const lastName = req.body.lName;

    const result = firstName.length + lastName.length;

    res.render("lengthResult.ejs",{firstName:firstName, lastName:lastName,result:result})

})







app.listen(3000,()=>{
    console.log("Your app is listening on https://localhost:3000")
})