var idx = 0;
fetch("https://www.engadget.com/rss-full.xml").then((res) => {    
    res.text().then((xml) => {
        try {
            var dom = new DOMParser();
            let doc = dom.parseFromString(xml, 'text/xml');
            doc.querySelectorAll('item').forEach((item) => {
                idx++;                          /*  idx just to count     */
                if (idx < 11) {                 /*  and stop the foreach  */
                    /* creating elements */
                    let card = document.createElement('div');
                    card.className = "card m-3 w-100 p-3 card-fixed-height";
                    let h1 = document.createElement('h1');
                    h1.className = "h3 font-weight-light mb-0";
                    let byWhen = document.createElement('span');
                    byWhen.className = "text-muted small mb-3";
                    let bodyTxt = document.createElement('p');
                    bodyTxt.className = "truncated-txt text-muted";
                    let hrefPost = document.createElement('a');
                    hrefPost.href = item.querySelector('link').textContent;
                    hrefPost.innerHTML = "&rarr;";
                    let date = new Date(item.querySelector('pubDate').textContent);
                    date = date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}); 
                    let categories = [];
                    item.querySelectorAll('category').forEach((el) => {
                        categories.push(el.textContent);
                    });
                    
                    /* appending everything to each card */
                    h1.appendChild(hrefPost);
                    card.appendChild(h1);
                    card.appendChild(byWhen);
                    card.appendChild(bodyTxt);

                    /* creating content inside created elements */
                    h1.textContent = item.querySelector('title').textContent;
                    byWhen.textContent = "By  " + item.querySelector('creator').textContent + " on " + date + " in " + categories.slice(0,3).join(', ');
                    bodyTxt.textContent = item.querySelector('description').textContent.replace(/<\/?[^>]+(>|$)/g, "");
                    document.querySelector("section").appendChild(card);
                }
            })
        } catch (err) {
            /* everybody commits mistakes... but you should never pull it to the origin */
            console.log("Error:\n", err);
        };
    })
})