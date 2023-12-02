"use strict";

const UserStorage = require("./UserStorage")

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);
  
      if (user) {
        if (user.id === client.id && user.password === client.password) {
          return { success: true };
        }
        return { success: false, message: '비밀번호가 틀렸어' };
      }
      return { success: false, message: '존재하지 않는 아이디야' };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);

      return response;
    } catch (err) {
      return {success: false, err};
    }
  }
}

module.exports = User;