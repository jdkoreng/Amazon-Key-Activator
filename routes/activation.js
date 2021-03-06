const express = require('express');
const router = express.Router();
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

//var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/keydb';
var MONGODB_URI = (process.env.NODE_ENV === 'development')
? 'mongodb://localhost/keydb'
: 'mongodb://heroku_qcb3mj90:rdnangs9ecc47drg49vq8k1699@ds147361.mlab.com:47361/heroku_qcb3mj90';
mongoose.connect(MONGODB_URI);

 var EmailThat = function (studentEmail) {
    var email 	= require("emailjs");
    var server 	= email.server.connect({
       user:    "sunsetlearningwithamazon", 
       password:"Sunset1212", 
       host:    "smtp.gmail.com",
       ssl:     true
    });

    var message	= {
        text:	"Welcome to SLI's neXT Community! Within 24 hours your account will be active, and you will gain access to your package's Video Reference Library, our Instructor-Led neXTpertise Mentoring Sessions and our technical Discussion Boards! *If you're having trouble getting into the neXT Community, please contact us at 303.729.1048 or jkorengold@sunsetlearning.com. Your email address will be your login, and your password will be set to 'sunsetstudent123' until you change it (highly recommended)", 
        from:	"Jeff <SunsetLearningWithAmazon@gmail.com>", 
        to:		`SLI Student <${studentEmail}>`,
        cc:      "Jeff <jkorengold@sunsetlearning.com>",
        subject:	"Welcome to neXT 365 with Sunset Learning"
     };
    
     // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function(err, message) { console.log(err || message); });
}


//post your code and info
//checks DB to see if exists, and if it does then do the post route
// and execute send email function
router.post('/', (req, res) => {
    var codes = [];
    mongoose.connection.db.collection('codes').
        find({"key" : req.body.activationCode}).toArray(function(err, results) {
            codes = results;
            if ((codes.length === 0) || (codes[0].alreadyUsed === true))  {
                // This is invalid
                res.status(400).send({ message: 'That was not a valid activation key or has already been activated!' });
            } else {
                // This is valid, update DB with info if it's not already activated and use send email function.
                EmailThat(req.body.email);
                var yourkey = codes[0].key;

                try {
                    mongoose.connection.db.collection('codes').updateOne(
                        { key: yourkey },
                        { $set: { 
                            "alreadyUsed" : true,
                            "firstName" : req.body.firstName,
                            "lastName" : req.body.lastName,
                            "email" : req.body.email
                        }}, function() {
                            res.send({ message: 'Successfully registered the activation key!' });
                        }
                     );
                 } catch (e) {
                    res.status(500).send(e)
                 }

                
            }
        });

    })
    
    module.exports = router;
    // MongoClient.connect("mongodb://localhost:27017/keydb", function(err, db) {
    // if(err) {
    //     return console.dir(err);
    // }
    // console.log('OUR DB', db);
    // db.listCollections(function(err, collections){
    //     console.log('COLLECTIONS', collections);
    // });

    // db.collection('test', function(err, collection) {});

    // });
    // db.codes.find( { [req.body.key]: { $exists: true } } )
    // db.codes.update({
    //         alreadyUsed: true,
    //         email: req.body.email,
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName

    //     }, {
    //         where: {
    //             key: req.body.key
    //         }
    //     })
    //     .then(() => {
    //         if(err) throw err;

    //         console.log("processed");
    //         EmailThat(db.codes.email);
    //         res.json({message: 'Your account has been activated. Please check your email.'})
    //     }).catch((err) => res.send("Your activation code is either incorrect or has been used already. Please try again or contact jkorengold@sunsetlearning.com to troubleshoot." + err));

