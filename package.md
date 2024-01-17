Puppeteer: Szerveroldali, a Google Chrome böngészőt használja fel, JavaScriptet és egyéb modern technológiákat is támogat, a képek mérete befolyásolja a teljesítményt. 
Forrás: https://pptr.dev/

Sharp: Különféle képszerkesztési eljárásokban (JPEG, PNG, GIF, stb.) és konvertálásban használatos. A kép méretezésére, elforgatására, vágására is lehetőséget nyújt. Számunkra azonban ez a csomag nem elegendő önmagában.      Forrás: https://sharp.pixelplumbing.com/

Node html-to-img: Képes CSS és JavaScript-et használó oldalakról is valós képet "készíteni", vagyis akár bonyolult layout-tal rendelkező oldalaknál is használható. JPEG vagy PNG, esetenként személyreszabható minőségű (JPG) képet képes készíteni. Van lehetőség csak adott elemből való képkészítésre (pl. Body)
Forrás: https://www.npmjs.com/package/node-html-to-image

Html2canvas: Kliensoldalon futtatható, egyszerűen felhasználható, de nem támogat bizonyos, a modern oldalakhoz elengedhetetlen fontosságú elemeket. (pl.:CSS3)
Forrás: https://www.npmjs.com/package/html2canvas

Wkhtmltoimage: Magas, jó minőségű képeket képes készíteni, támogatja a JavaScriptet és a CSS3-at is. Bonyolult a telepítése, mivel külső fájlt is alkalmaz, tovább időigényes vele egy-egy képgenerálási folyamat. Eredetileg HTML-ből PDF konvertálásra tervezték.
Forrás: https://www.npmjs.com/package/wkhtmltoimage

Jsdom-screenshot: Szerveroldali működés, a CSS, JavaScript és egyéb modern technológiákat csak korlátozottan támogat, viszonylag kisérleti jellegű.
Forrás: https://github.com/dferber90/jsdom-screenshot/blob/master/README.md

Electron-screenshot-service: modern webes technológiák teljes támogatása, viszont nagyobb erőforráshasználattal és bonyolultabb konfigurálási folyamattal jár.
Forrás: https://www.geeksforgeeks.org/how-to-take-screenshots-in-electronjs/

Capture-website: Puppetree-t használ, szerveroldali, lehetősét ad a képek minőségének, méretének egyéb beállításainak finomhangolására, Google Chrome böngésző függő.
Forrás: https://www.npmjs.com/package/capture-website?activeTab=explore

Webshot: Számos lehetőséget ad, mint például képek méretének, minőségének megváltoztatása. PhantomJS-re épül, már nem mondható aktívnak a fejlesztés. Utolsó kiadás: 8 évvel ezelőtt (0.18.0) [https://github.com/brenden/node-webshot/]
Forrás: https://www.npmjs.com/package/node-webshot

Pageres: Különböző felbontásban képes képet generálni, Puppeteer-t használ, nagyobb erőforrást igényel, de viszonylag gyorsnak mondható (1 perc alatt akár 100 képet is képes készíteni)
Forrás:https://github.com/sindresorhus/pageres


A megjelölt forrásokon kívül, más oldalak is felhasználásra kerültek a lista kigyűjtésére, a folyamat gyorsítására
Például:
https://www.urlbox.io/7-ways-website-screenshots-nodejs-javascript



Választásom:
Puppeteer: Mint említettem, a megadott feladatra tökéletes, képes kezelni bonyolultabb CSS, HTML, JavaScript tartalommal rendelkező oldalakat is, könnyen integrálható az Express.js alkalmásba. Aszinkron működési elv szerint is használható, és viszonylag sok, nagyobb terjedelmű leírás lelhető fel róla, így megkönnyíti a feladathoz való felhasználás menetét. Természetesen nem számít előnynek, hogy Google Chrome függő és nagyobb erőforrás-igényű, de a célnak most megfelelő lesz véleményem szerint.