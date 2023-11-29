"use strict";

const UserStorage = require("./UserStorage")

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const {id, password} = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, message: '비밀번호가 틀렸어' };
    }
    return { success: false, message: '존재하지 않는 아이디야' };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);

      return response;
    } catch (error) {
      return {success: false, message: error};
    }
  }
}

module.exports = User;