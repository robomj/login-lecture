"use strict";

const db = require("../config/db");

const fs = require("fs").promises;

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM user WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(`${err}`);
        resolve(data[0]);
      });
    });
  } 

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO user (id, name, password) VALUES (?, ?, ?);";
      db.query(
        query,
        [
          userInfo.id,
          userInfo.name,
          userInfo.password
        ],
        (err) => {
        if (err) reject(`${err}`);
        resolve({success: true});
      });
    });
  }
}

module.exports = UserStorage;