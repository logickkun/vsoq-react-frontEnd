export class AuthVo {
  public username: string;
  public password: string;

  constructor(username: string = '', password: string = '') {
    this.username = username;
    this.password = password;
  }

  toJSON() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}


