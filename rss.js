var idx = 0;
var url = "https://www.engadget.com/rss-full.xml";
fetch(url).then((res) => {
    res.text().then((xml) => {
        var dom = new DOMParser();
        let doc = dom.parseFromString(xml, 'text/xml');
        doc.querySelectorAll('item').forEach((item) => {
            idx++;                          /*  idx just to count     */
            if (idx < 11) {                 /*  and stop the foreach  */
                /* creating elements */
                let date = new Date(item.querySelector('pubDate').textContent);
                date = date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}); 

                let categories = [];
                item.querySelectorAll('category').forEach((el) => {
                    categories.push(el.textContent);
                });

                let card = document.createElement('div');
                card.className = "card w-100 p-3 card-fixed-height";

                let h3 = document.createElement('a');
                h3.className = "h3 d-block font-weight-light mb-0";
                h3.href = item.querySelector('link').textContent;
                h3.innerHTML = item.querySelector('title').textContent;
                
                let byWhen = document.createElement('span');
                byWhen.className = "text-muted small";
                byWhen.textContent = "By  " + item.querySelector('creator').textContent + " on " + date + " in " + categories.slice(0,3).join(', ');

                let bodyTxt = document.createElement('p');
                bodyTxt.className = "mt-3 truncated-txt text-muted";
                bodyTxt.textContent = item.querySelector('description').textContent.replace(/<\/?[^>]+(>|$)/g, "");
                
                /* constructing the card */
                card.appendChild(h3);
                card.appendChild(byWhen);
                card.appendChild(bodyTxt);

                /* create card */
                document.querySelector("section").appendChild(card);
            }
        })
    })
}, (reject) => {
    alert("Connection error - fetching URL failed at " + url + ".\nVerify internet connection or try again later.");
})