
const express = require('express');
const roomRoute = express.Router();
let Room = require('../model/room');

//adding Room router

roomRoute.route('/addRoom').post((req, res, next) => {
    Room.create(req.body).then((data, error) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//get all Room route
roomRoute.route('/').get((req, res, next) => {
    Room.find().then((data, error) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//get Room by id router
roomRoute.route('/readRoom/:id').get((req, res, next) => {
    Room.findById(req.params.id).then((data, error) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});



roomRoute.route('/updateRoom/:id').put((req, res, next) => {
    Room.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }).then( (data, error) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Updated Sucessfully');
        }
    });
});


roomRoute.route('/deleteRoom/:id').delete((req, res, next) => {
    Room.findByIdAndRemove(req.params.id).then((data, error) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    });
});

module.exports = roomRoute