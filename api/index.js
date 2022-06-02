const express = require('express');
const app = express();
const PORT = 8080;

//middleware
app.use(express.json())

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'bleh',
        size: 'large'
    })
});

//dynamic url
app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;
    if (!logo) {
        res.status(418).send({message: 'Need a logo!'})
    }

    res.send({
        tshirt: `bleh with your ${logo} and ID of ${id}`,
    });
});

app.listen(
    PORT,
    () => console.log(`it's up on http://localhost:${PORT}`)
)