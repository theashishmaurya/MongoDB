const mongoose = require ('mongoose');

// Using mocha's Hooks

before((done)=>{
//connect mongoose and mongodb
mongoose.connect("mongodb://localhost/mongotube",{useNewUrlParser: true});

//setting up promise on the connection

mongoose.connection
    .once("open" , () => {
        // console.log("Connected")
        done();
    })
    .on("error" , error => {
        console.log("Your Error : " , error)
    });

});

