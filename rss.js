
fetch("https://www.engadget.com/rss-full.xml").then((res) => {    
    res.text().then((xml) => {
        /* console.log(xml); */
        try {
            var dom = new DOMParser();
            let doc = dom.parseFromString(xml, 'text/xml');
            doc.querySelectorAll('item').forEach((item) => {
                let card = document.createElement('div');
                card.className = "card m-3 w-100 p-3";
                let h1 = document.createElement('h1');
                h1.className = "h3 font-weight-light";
                card.appendChild(h1);
                h1.textContent = item.querySelector('title').textContent;
                document.querySelector("output").appendChild(card);
            })

        } catch (err) {
            console.log("Erro ao disponibilizar o feed:\n", err);
        }
    })
})