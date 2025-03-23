const fetch = require('node-fetch');

module.exports = (req, res) => {
    fetch('http://rayuvtsi-stb.site/ott/ott-7.json')
        .then(r => r.json())
        .then(r => res.json(r));
}
