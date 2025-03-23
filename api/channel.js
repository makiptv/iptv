const fetch = require('node-fetch');

module.exports = (req, res) => {
    const fileName = req.query.q;

    fetch('http://rayuvtsi-stb.site/ott/' + fileName)
        .then (r => {
            res.redirect(302, r.url);
        });
}
