var fs=require('fs');
var parseString = require('xml2js').parseString;
fs. readFile('./.*xml', 'utf8', function(err, contents) {
    console.log(contents);
    parseString(contents, function (err, result) {
        console.dir(JSON.stringify(result));
    });
    });
    console.log('after calling readFile');
//var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';
