const express = require('express');
const cors = require('Cors');

const app = express();

app.use(cors());
// cors - cross-origin resource sharing 
//cors origins - allow all origins, restrict to specific origins, allow credentials, set allowed methods and headers, handle preflight requests, configure caching, and implement rate limiting.

app.get('/students', (req, res) => {
   res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});