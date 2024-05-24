const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Room =new Schema({ 
    id:{
        type:String,
    },
    name:{
        type:String,
    },
    messages: {
        type: [String],
    },
    description:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
{
    collection:'room'
});

module.exports = mongoose.model('Room',Room);