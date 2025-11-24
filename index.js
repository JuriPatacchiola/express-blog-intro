const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));


const posts = [
    {
        titolo: "Ciambellone fatto in casa",
        contenuto: "Una ricetta semplice e buonissima per preparare il classico ciambellone della nonna.",
        immagine: "/images/ciambellone.jpeg",
        tags: ["dolci", "colazione", "tradizione"]
    },
    {
        titolo: "Cracker alla barbabietola",
        contenuto: "Snack croccante e colorato grazie alla barbabietola. Perfetto per un aperitivo sano.",
        immagine: "/images/cracker_barbabietola.jpeg",
        tags: ["salato", "snack", "barbabietola"]
    },
    {
        titolo: "Pane fritto dolce",
        contenuto: "Un dolce povero della tradizione italiana, semplice ma irresistibile.",
        immagine: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolci", "fritto", "tradizione"]
    },
    {
        titolo: "Pasta alla barbabietola",
        contenuto: "Un piatto colorato e sorprendentemente gustoso grazie alla barbabietola.",
        immagine: "/images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola", "primi"]
    },
    {
        titolo: "Torta paesana",
        contenuto: "Dolce tipico lombardo, fatto con pane raffermo, latte e cacao.",
        immagine: "/images/torta_paesana.jpeg",
        tags: ["dolci", "pane", "tradizione"]
    }
];

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res) => {
    res.json({ posts });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



// link se nel caso si vuole vedere un immagine specifica http://localhost:3001/images/ciambellone.jpeg
// link per vedere la bachehca http://localhost:3001/bacheca
