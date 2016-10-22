var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://' + process.env.IP + '/shoes';

MongoClient.connect(url, function(err, db) {
    if(err) {
        console.log("Unable to connect to the mongoDB serer. Error: ", err);
    } else {
        console.log('Connection established to ', url);
        
        var collection = db.collection('users');
        
        var cursor = collection.find({name: 'modulus user'});
        
        cursor.sort({age: -1});
        
        cursor.limit(10);
        
        cursor.skip(0);
        
        cursor.each(function(err, doc) {
           if (err) {
               console.log(err);
           } else {
               console.log('Fetched:', doc);
           }
        });
        
        db.close();
    }
})