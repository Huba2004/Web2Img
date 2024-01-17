//Szoksásos express.js szerver, a puppeteer modul segítségével képernyőképet készít a megadott URL-ről.
const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public')); //public mappa elérhetőségének biztosítása

app.get('/kep-generalas', async (req, res) => { // GET kérés, a megadott útvonalon
    const url = req.query.url; // A képernyőkép készítéséhez URL beszerzése
    const szelesseg = parseInt(req.query.szelesseg); //Képernyőkép méreteinek beállítása
    const magassag = parseInt(req.query.magassag);

    if (!url) { //Egyszerű hibaellenőrzés, 400-as hibakód küldése
        return res.status(400).send('Nincs URL megadva!');
    }
    if (!szelesseg || !magassag){
        return res.status(400).send('Érvénytelen méretek!');
    }

    try {
        const bongeszo = await puppeteer.launch(
            { headless: "new" } //"SÁRGA" hibaüzenet elhárítása
        );
        const oldal = await bongeszo.newPage(); //Új lap megnyitása
        await oldal.setViewport({ width: szelesseg, height: magassag }); //Lap méretének beállítása
        await oldal.goto(url); //Laphoz navigálás
        const kepernyofoto = await oldal.screenshot({ fullPage: true }); //Képernyőkép készítése (teljes képernyős)
        await bongeszo.close();

        res.contentType('image/png'); //válasz típusa
        res.send(kepernyofoto); //válasz elküldése
    } catch (error) {
        res.status(500).send('A kép generálása közben hiba történt.');
    }
});

app.get('/', (req, res) => { //gyökér URL-re mutató kérés
    res.sendFile('index.html', { root: path.join(__dirname, '../public') }); //index.html a public mappából
});

app.listen(port, () => { //Indítás a megadott porton
    console.log(`Server listening at http://localhost:${port}`);
});
