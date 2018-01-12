import dbday from './../models/day';
import { log } from 'util';
import mypw from './../newdaypw.js';
var moment = require('moment');

let Day = require('./../models/Day');

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
        day.save().then((newDay) => {
            console.log("Day Received");
            console.log(newDay);
            res.status(200).redirect('/post');
        }).catch((err) => {
            res.status(500).json({
                message: err,
            });
        });
    } else {
        res.render('index', {title: "Calum Patrick"});
    }

    
};

export default dayController;