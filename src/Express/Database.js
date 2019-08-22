var express = require('express');
var app = express();


var ds = setupDataSource();


function setupDataSource(){
    let dbClient = require('mongodb').MongoClient;
    var dbConnection;
    const dbName = 'animals';
    dbClient.connect('mongodb://localhost:27017/animals',
        { useNewUrlParser: true, useUnifiedTopology: true  },
        function(err, client){
        if (err) throw err;

        // dbConnection = client.db(dbName);
    });

    return dbConnection;
};