# BIND-Reader (RSS reader in Javascript)
Example of a RSS reader using JS and Bootstrap.

## Thoughts...
The image tag is inserted inside the description XML one. I understand it's reasonable to simply slice it with a `search` and `substr`, but the `src` link returned with a 401 in the end. Every image is pointed to a CDN which signs and protect it, since we're fetching the URL from an unknown origin for them, we're blocked. :(

For the categories, I'd add styled badges for each one if they had some sort of organization, but they don't. They're not even listed in order of matter, so that wasn't a option either (to show the first three styled, e.g.).

## If you can't run it...
... then it's probably something on cross-origin. Download a CORS add-on for your browser, activate it and F5 the index.

For Firefox: [CORS Everywhere](https://addons.mozilla.org/pt-PT/firefox/addon/cors-everywhere/)
For Chrome: [Allow CORS](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)
For Opera: [CORS Toggle](https://addons.opera.com/pt/extensions/details/cors-toggle/)