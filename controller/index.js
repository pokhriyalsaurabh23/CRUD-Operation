var express = require('express');
var router = express.Router();
var User = require("../models/model");


exports.users = async function (req, res, next) {
    const users = await User.find();
    res.render('index', { users });
};

exports.adduser = function (req, res, next) {
    res.render('adduser', { title: 'Add User' });
}


exports.getUserById = async function (req, res, next) {
    const user = await User.find({ _id: req.params.id });
    const userData = user[0];
    res.render('updateuser', { userData });
}

exports.createUser = async (req, res, next) => {
    await User.create(req.body);
    res.status(200).redirect('/');
}

exports.updateUser = async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    }
    await User.findByIdAndUpdate(req.params.id, newUserData, {
    });
    res.status(200).redirect('/');
}


exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);

}