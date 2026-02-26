// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/',(req,res)=>{
//   res.send("This is my first server")
// })

// app.get('/about',(req,res)=>{
//   res.send("<h1>This is my about page</h1>");
// })

// app.get('/abes',(req,res)=>{
//   res.send(`
//     <h1>ABES Engineering College</h1>
//     <img src="https://images.shiksha.com/mediadata/images/1494566683phpZgcM81.jpeg" height="300px" width="300px"></img>
//     `);
// })

// app.get('/image',(req,res)=>{
//   res.send(`<img src="https://images.shiksha.com/mediadata/images/1494566683phpZgcM81.jpeg" height="500px" width="500px"></img>`);
// })

// app.listen(port,()=>{
//   console.log(`server is running on address http://localhost:${port}`);
// })




// JSON:- Object ko ek notation pr laata hai jb hamare paas database nhi hota hai tb agr database hai to JSON ki koi jarurat nhi hai
// CRUD:- C-POST, R-GET, U-PUT, D-DELETE

const express = require('express');
const app = express();
const port=3000;
app.use(express.json());   // adding middleware for update

// data base of (json)
const students = [
  {
    id:1,
    name:"Anand",
    class: "CE"
  },
  {
    id:2,
    name:"Suresh",
    class: "ITI"
  },
  {
    id:3,
    name:"Utkarsh",
    class: "IT"
  },
  {
    id:4,
    name:"Dhananjay",
    class: "CSE"
  }
]


// data read(all data)
app.get('/read',(req,res)=>{
  try{
    res.status(200).json({message: "show all data", data: students});
  }
  catch(err){
    res.status(500).json({message: "data not found", error: err.message});
  }
})


// data read for a specific id
app.get('/about/:id',(req,res)=>{ // id is route parameter
  try{
    const id = req.params.id;
    const student = students.find(s=>s.id==id);
    if(!student){
      return res.status(404).json({message: "student data is not found", student});
    }
    res.status(200).json({message: "student data found", student});
  }
  catch(err){
    res.status(500).json({message: "data not found", error: err.message});
  }
})


// data is create
app.post('/add',(req,res)=>{
  try{
    const newStudent = {
      id:students.length+1,
      ...req.body        // '...' -> Denotes Destructuring otherwise hame ye karna hoga-> name=req.body.name, class=req.body.class banana padega
    }
    students.push(newStudent);  // add data of newStudent in students json
    res.status(200).json({message: "Student added successfully", newStudent});
  }
  catch(err){
    res.status(500).json({message: "data not found", error: err.message});
  }
})


// data update
app.put('/edit/:id',(req,res)=>{
  try{
    const id = req.params.id;
    const index = students.findIndex(s=>s.id==id);
    if(index == -1){
      return res.status(404).json({message: "student data is not found"});
    }
    students[index] = {
      ...students[index],
      ...req.body
    };
    res.status(200).json({message: "student data updated successfully", data: students[index]});
  }
  catch(err){
    res.status(500).json({message: "data not found", error: err.message});
  }
});


// data delete
app.delete('/delete/:id',(req,res)=>{
  try{
    const id = req.params.id;
    const index = students.findIndex(s=>s.id==id);
    if(index == -1){
      return res.status(404).json({message: "student data is not found", student});
    }
    students.splice(index,1);
    res.status(200).json({message: "student data is deleted"});
  }
  catch(err){
    res.status(500).json({message: "data not found", error: err.message});
  }
});


app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
})