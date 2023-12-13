const express = require("express");


const app = express();

app.listen(3000, () => {
    console.log('Listening On Port 3000');
})

app.get('/getRequest', (req, res) => {
    res.send("Hello World!");
});

app.post("/postRequest", (req, res) => {
    res.send("This is a successful POST request");
});

app.put("/putRequest", (req, res) => {
    res.send("This is a successful PUT request");
});
