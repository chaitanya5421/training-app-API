const express = require('express');
const cors = require('Cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies
// cors - cross-origin resource sharing 
//cors origins - allow all origins, restrict to specific origins, allow credentials, set allowed methods and headers, handle preflight requests, configure caching, and implement rate limiting.

// app.get('/students', (req, res) => {
//    res.json([
//         { id: 1, name: 'John Doe' },
//         { id: 2, name: 'Jane Smith' },
//         { id: 3, name: 'Alice Johnson' }
//     ]);
// });

// get

// app.get('/students', (req, res) => {
//     fs.readFile('students.json', (err, data) => {
//         const students = JSON.parse(data);
//         res.json(students);
//     });
// });


//post
app.post('/students', (req, res) => {
    const student = req.body;
    fs.readFile('students.json', 'utf8', (err, data) => {
    const students = data ? JSON.parse(data) : [];
    students.push(student);
    console.log('Added student:', student);
    fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
       res.json({ message: 'Student added successfully' });
    });
});
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});