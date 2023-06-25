var express = require('express');
var router = express.Router();

const shows = require('../models/shows');
const tags = require('../models/tags');

router.get('/', function(req, res, next) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify({'success': true}));
});

router.get('/tags', function(req, res, next) {
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(tags));
});

router.get('/tagged/:tags', function(req, res, next) {
    const tags = req.params.tags.split('-').map(Number);
    const r = [];
    shows.forEach((s) => {
        let allTagged = true;
        tags.forEach((ts) => {
            allTagged = allTagged && (s.t.includes(ts));
        });
        if(allTagged) {
            r.push(s);
        }
    });
    res.set('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify(r));
});

module.exports = router;
