'use strict';

const hello =  (req, res) => {
    res.render("home/index")
}

const login = (req, res) => {
    res.render("home/login")
}

const logout = (req, res) => {
    res.render("home/logout")
}

module.exports = {
    hello,
    login,
    logout,
}