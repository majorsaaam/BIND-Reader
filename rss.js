var idx = 0;
fetch("https://www.engadget.com/rss-full.xml").then((res) => {    
    res.text().then((xml) => {
        try {
            var dom = new DOMParser();
            let doc = dom.parseFromString(xml, 'text/xml');
            doc.querySelectorAll('item').forEach((item) => {
                idx++;                
                if (idx < 11) {
                    let card = document.createElement('div');
                    card.className = "card m-3 w-100 p-3 card-fixed-height";
                    let h1 = document.createElement('h1');
                    h1.className = "h3 font-weight-light";
                    let bodyTxt = document.createElement('p');
                    bodyTxt.className = "truncated-txt text-muted";
                    bodyTxt.textContent = item.querySelector('description').textContent.replace(/<\/?[^>]+(>|$)/g, "");

                    card.appendChild(h1);
                    card.appendChild(bodyTxt);

                    h1.textContent = item.querySelector('title').textContent;
                    document.querySelector("section").appendChild(card);
                }
            })
        } catch (err) {
            console.log("Error:\n", err);
        };
    })
})