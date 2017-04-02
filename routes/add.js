var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({'msg': 'use a POST request'});
});

router.post('/', function(req, res, next) {
    if (isNaN(parseInt(req.body.var1)) || isNaN(parseInt(req.body.var2))) {
        res.status(400);
        res.json({'msg': 'You must supply a number!"'});
    } else {
        var var1 = parseInt(req.body.var1);
        var var2 = parseInt(req.body.var2);
        res.contentType('application/json');
        res.json({'result': var1 + var2});
    }
});

module.exports = router;