var mongoose = require('mongoose');

mongoose.connect('mongodb://' + process.env.IP + '/mongoose');


/**
  * This model represents a collection in the database.
  * We define the possible schema of User document and data types of each field.
  * */
var User = mongoose.model('User', {
    name: String,
    roles: Array,
    age: Number
});

User.findOne({name: 'modulus admin'}, function(err, userObj) {
    if (err) {
        console.log(err);
    } else if (userObj) {
        console.log('Found:', userObj);
        
        // update user on condition
        if (userObj.age != 30) {
            userObj.age += 30;
            
            // Save it
            userObj.save(function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Updated', userObj);
                }
            });
        }
    } else {
        console.log('User not found!');
    }
});

// var user1 = new User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});

// user1.name = user1.name.toUpperCase();

// console.log(user1);

// // save it
// user1.save(function(err, userObj) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('saved successfully:', userObj);
//     }
// })