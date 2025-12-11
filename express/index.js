const express = require('express');
const app = express();
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// app.use((req,res)=>{
//     console.log('Request received');
//     res.send({
//         message: 'Hello from Express server!'
//     });
// });
app.get('/:username', (req, res) => {
    console.log(req.params.username);
    res.send({
        message: 'Hello from nodemon!'
    });
});
app.get('/apple', (req, res) => {
    res.send({
        message: 'Hello from apple server!'
    });
});