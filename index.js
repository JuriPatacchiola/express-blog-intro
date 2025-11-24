const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


const posts = [
    {
        titolo: "Ciambellone fatto in casa",
        contenuto: "Una ricetta semplice e buonissima per preparare il classico ciambellone della nonna.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "tradizione"]
    },
]

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})