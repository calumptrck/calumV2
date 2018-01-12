import dbday from './../models/Day';
import { log } from 'util';
import mypw from './../newdaypw.js';
var moment = require('moment');



const dayController = {};

dayController.post = (req, res) => {
    
    var currentDate = moment().format('MMMM Do');

    const date = currentDate;
    const tasks = [req.body.task];
    
    const day = new dbday({
        date,
        tasks 
    });

    // IF LOGGED IN AS ADMIN

    if (req.body.formpassword == mypw) {
        console.log("Current DB:");
        dbday.findOneAndUpdate({"date":currentDate}, { $addToSet: { tasks: req.body.task } }, {upsert:true}, function(err, doc){
            if (err) { 
                return res.send(500, { error: err });
            } else {
                console.log(doc);
                res.status(200).redirect('/post');
            }
        });
        
        

    } else {
        res.render('index', {title: "Calum Patrick"});
    }

    
};


export default dayController;