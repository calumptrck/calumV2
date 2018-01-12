import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const daySchema = new Schema({
    date: String,
    tasks: {
        type: [String],
        default: []
    }
});

let Day = module.exports = mongoose.model('Day', daySchema);
