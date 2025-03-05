import express from 'express'
import fs from 'fs'

const app = express ()


fs.writeFile('abc.txt', "Iam Navyendhu", (err)=>{
    if(err){
        console.log(err);
        return
        
    }

    console.log("File written successfully");
    
})


fs.appendFile('abc.txt', 'IAM 26 years Olddd!!!', (err)=>{
    if(err){
        console.log(err);
        return
        
    }

    console.log('Appended successfully');
    
})


fs.readFile('abc.txt', 'utf-8',(err, data)=>{
    if (err){
        console.log(err);
        return
    }

    console.log(data);
    
})


//query params

app.get('/sum', (req,res)=>{
    const num1 = parseInt(req.query.num1)
    const num2 = parseInt(req.query.num2)

    const sum = num1+ num2

    res.send(`sum of ${num1} + ${num2} = ${sum}`)
})

//route params 

app.get('/sum2/:num1/:num2',(req,res)=>{

    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)


    const sum = num1 + num2

    res.send(`sum of ${num1} + ${num2} = ${sum}`)

})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });